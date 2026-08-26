/**
 * Personal work that can be shown. Company systems stay off this page.
 *
 * href is a public demo only. Private GitHub repos are not linked.
 */
export const projects = [
  {
    id: "parallel-life",
    index: "01",
    name: {
      en: "PARALLEL LIFE",
      zh: "PARALLEL LIFE",
    },
    stack: ["JAVA", "SPRING BOOT", "REACT"],
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
    stack: ["NEXT.JS", "TYPESCRIPT", "INDEXEDDB"],
    href: "https://moyu-reader-lovat.vercel.app",
    preview: "/work/moyu-reader.png",
    previewAlt: {
      en: "Moyu Reader in work mode",
      zh: "摸鱼阅读器工作模式",
    },
  },
];
