/**
 * Real work only. Parallel Life has no public build.
 * Moyu Reader and this repository do.
 */
export const projects = [
  {
    id: "parallel-life",
    index: "01",
    name: {
      en: "Parallel Life",
      zh: "Parallel Life",
    },
    line: {
      en: "A life you don't get to edit.",
      zh: "一段不能改写的人生。",
    },
    detail: {
      en: "It starts with a person — home, year, a path — and then the life runs. Spring Boot keeps the branches. The screen is a phone.",
      zh: "从故乡、年份和一条路开始，然后这段人生自己走下去。分支记在 Spring Boot 里，屏幕是一部手机。",
    },
    stack: "Java · Spring Boot · React",
    href: "",
    shape: "phone",
    preview: "/work/parallel-life.png",
    width: 344,
    height: 876,
    previewAlt: {
      en: "Parallel Life start screen, choosing a person before the life begins",
      zh: "Parallel Life 起始界面，在人生开始前选择一个人",
    },
  },
  {
    id: "moyu-reader",
    index: "02",
    name: {
      en: "Moyu Reader",
      zh: "摸鱼阅读器",
    },
    line: {
      en: "A book in a work window.",
      zh: "工作窗口里的一本书。",
    },
    detail: {
      en: "Markdown, text, and EPUB, opened like a project. The book stays on this device. A key puts it away.",
      zh: "Markdown、文本和 EPUB，像打开一个项目。书留在这台设备上。按一下，就收起来。",
    },
    stack: "Next.js · TypeScript",
    href: "https://moyu-reader-lovat.vercel.app",
    link: "open",
    shape: "desktop",
    preview: "/work/moyu-reader.png",
    width: 1600,
    height: 900,
    previewAlt: {
      en: "Moyu Reader disguised as a code editor",
      zh: "摸鱼阅读器，看起来像一个代码编辑器",
    },
  },
  {
    id: "this-site",
    index: "03",
    name: {
      en: "This site",
      zh: "这个站点",
    },
    line: {
      en: "The water on this page.",
      zh: "这一页上的水。",
    },
    detail: {
      en: "A rough blue sea, drawn in the browser. Scroll, and the light changes.",
      zh: "浏览器里的一片蓝色的海。滚动的时候，浪和光线会变。",
    },
    stack: "Vue · Three.js",
    href: "https://github.com/crestalee/crestalee.github.io",
    link: "source",
    shape: "desktop",
    preview: "/og-image.jpg",
    width: 1200,
    height: 630,
    previewAlt: {
      en: "This site, a rough blue sea",
      zh: "这个站点，一片汹涌的海",
    },
  },
];
