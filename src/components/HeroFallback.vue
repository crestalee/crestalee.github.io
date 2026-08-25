<template>
  <div class="hero-fallback" aria-hidden="true">
    <svg viewBox="0 0 200 200">
      <polygon
        points="100,18 168,58 168,142 100,182 32,142 32,58"
        fill="none"
        stroke="rgba(243,243,238,0.55)"
        stroke-width="1.1"
      />
      <polygon
        points="100,42 150,72 150,128 100,158 50,128 50,72"
        fill="rgba(42,48,58,0.92)"
        stroke="rgba(197,210,234,0.45)"
        stroke-width="0.8"
      />
      <polygon points="100,42 150,72 100,100" fill="rgba(78,140,255,0.16)" />
      <polygon points="100,42 50,72 100,100" fill="rgba(243,243,238,0.08)" />
      <polygon points="50,72 50,128 100,100" fill="rgba(78,140,255,0.1)" />
      <circle cx="100" cy="100" r="9" fill="#4e8cff" />
    </svg>
  </div>
</template>

<style scoped>
.hero-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.hero-fallback svg {
  width: min(42vw, 380px);
  height: auto;
  filter: drop-shadow(0 0 28px rgba(78, 140, 255, 0.18));
}
</style>
