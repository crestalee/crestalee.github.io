# 构建应用
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 生产环境服务 (Nginx Alpine)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN echo 'server { \
    listen 12445; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    gzip on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css application/javascript application/json image/svg+xml font/woff2; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(?:woff2?|svg|png|jpg|jpeg|gif|ico|css|js)$ { \
        expires 1y; \
        add_header Cache-Control "public, max-age=31536000, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 12445
CMD ["nginx", "-g", "daemon off;"]