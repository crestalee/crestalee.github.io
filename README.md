<div align="center">

# Cresta Lee

一片黄昏的海，和三件软件。

[**线上**](https://crestalee.github.io)

</div>

---

个人站点，不是简历。首页是一段 WebGL 短片：镜头贴着水面，天色从黄昏走到蓝调。滚动时海和光跟着走。文案很少。

作品只有三件，都是真的：

- **Parallel Life** — 一段不能改写的人生。还没有公开版本。
- **[摸鱼阅读器](https://moyu-reader-lovat.vercel.app)** — 工作窗口里的一本书。
- **这个站点** — 你正在看的这片水。[源码](https://github.com/crestalee/crestalee.github.io)

`prefers-reduced-motion` 时，海停在一帧静画上，页面用原生滚动。

## 本地预览

```bash
npm install
npm run dev
```

打开 `http://localhost:5173`。生产构建：

```bash
npm run build
npm run preview
```

## 画面

- 程序化 Gerstner 海面，天空、太阳和倒影在同一个着色器里
- ACES Filmic 色调，半分辨率柔光只吃太阳和反光
- 远处用雾收进天际，免得海平面露出一条硬边
- Lenis 平滑滚动。滚动进度驱动镜头，不另做一套 HUD

桌面像素比封顶约 1.35。如果一帧超过 22ms，会再降一点，好让轻薄本维持在 60fps 附近。

## 改字和作品

- `src/data/site.js` — 名字、邮箱、GitHub
- `src/data/copy.js` — 中英文案
- `src/data/projects.js` — 作品。没有公开链接就留空 `href`，页面会写「还没有公开版本」，不要编一个

## 许可

[MIT](./LICENSE)
