/**
 * Personal work and engineering showcase.
 *
 * href is a public demo only. Private GitHub repos are flagged appropriately.
 */
export const projects = [
  {
    id: "parallel-life",
    index: "01",
    name: {
      en: "PARALLEL LIFE",
      zh: "PARALLEL LIFE",
    },
    tagline: {
      en: "Multi-branch narrative life simulator & deterministic state engine.",
      zh: "多分支叙事人生模拟器与确定性状态调度引擎。",
    },
    description: {
      en: "A high-dimensional decision simulator exploring divergent life trajectories. Powered by a Spring Boot state-machine backend and a responsive mobile narrative frontend with real-time probabilistic event dispatching.",
      zh: "探索不同人生轨迹的高维决策模拟器。底层采用 Spring Boot 状态机架构驱动，前端结合移动优先的响应式叙事流与实时概率事件分发系统。",
    },
    stack: ["JAVA 17", "SPRING BOOT", "REACT", "STATE MACHINE", "WEBSOCKET"],
    features: {
      en: ["Dynamic State Trees", "Event Probability Graph", "Branch Replay Engine"],
      zh: ["动态状态决策树", "事件概率拓扑图", "分支回溯回放引擎"],
    },
    status: {
      en: "ACTIVE DEV",
      zh: "活跃开发中",
    },
    href: "",
    shape: "phone",
    preview: "/work/parallel-life.png",
    previewAlt: {
      en: "Parallel Life start screen",
      zh: "Parallel Life 起始界面",
    },
  },
  {
    id: "moyu-reader",
    index: "02",
    name: {
      en: "MOYU READER",
      zh: "摸鱼阅读器",
    },
    tagline: {
      en: "Stealth productivity reading client disguised as developer tools.",
      zh: "伪装成高阶开发者工具的高效摸鱼阅读客户端。",
    },
    description: {
      en: "A disguised reader crafted with Next.js and TypeScript. Features mock IDE/terminal presentation modes, local-first IndexedDB offline caching, instant panic hotkeys, and zero-latency EPUB parsing.",
      zh: "基于 Next.js 与 TypeScript 构建的隐蔽阅读客户端。内置模拟 IDE/终端界面主题、基于 IndexedDB 的本地离线优先存储、全局一键伪装快捷键以及零延迟 EPUB 极速解析。",
    },
    stack: ["NEXT.JS 14", "TYPESCRIPT", "INDEXEDDB", "TAILWIND CSS", "WEB WORKER"],
    features: {
      en: ["Mock IDE Themes", "Local-first Cache", "Instant Boss Key", "Worker Parsing"],
      zh: ["伪装 IDE 代码主题", "本地离线存储", "瞬间老板键切换", "Worker 多线程解析"],
    },
    status: {
      en: "LIVE V1.2",
      zh: "在线运行中",
    },
    href: "https://moyu-reader-lovat.vercel.app",
    shape: "desktop",
    preview: "/work/moyu-reader.png",
    previewAlt: {
      en: "Moyu Reader in work mode",
      zh: "摸鱼阅读器工作模式",
    },
  },
  {
    id: "vault-canvas",
    index: "03",
    name: {
      en: "CRESTALEE HUD 3D",
      zh: "CRESTALEE HUD 3D",
    },
    tagline: {
      en: "Cinematic WebGL space canvas & precision digital craftsmanship.",
      zh: "电影级深空 WebGL 粒子视效与极简数字工业美学站点。",
    },
    description: {
      en: "The interactive architectural engine behind this portfolio. Features ACES Filmic tone mapping, UnrealBloom post-processing, Lenis inertia scroll synchronization, Web Audio synthesizer, and adaptive reduced-motion fallbacks.",
      zh: "驱动本站的交互式图形引擎。具备 ACES Filmic 电影级色调映射、UnrealBloom 辉光后处理、Lenis 惯性平滑滚动管道、原生 Web Audio 音效合成以及动态减弱动画自适应降级。",
    },
    stack: ["VUE 3", "THREE.JS", "GSAP", "LENIS", "WEB AUDIO API"],
    features: {
      en: ["Custom Shader Pipeline", "Synthesized SFX", "Kinematic Scroll", "HUD Terminal"],
      zh: ["定制 Shader 渲染管线", "合成实时音效", "物理惯性滚动", "HUD 极客终端"],
    },
    status: {
      en: "OPEN SOURCE",
      zh: "开源作品",
    },
    href: "https://github.com/crestalee/crestalee.github.io",
    shape: "desktop",
    preview: "/og-image.png",
    previewAlt: {
      en: "Crestalee 3D Space Portfolio preview",
      zh: "Crestalee 3D 个人主页预览图",
    },
  },
];
