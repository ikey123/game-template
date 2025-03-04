export default {
  index: {
    title: "首页",
    type: "page",
    icon: "material-symbols:home",
    href: "/zh",
  },
  categories: {
    title: "分类",
    type: "menu",
    icon: "material-symbols:category",
    items: {
      creative: {  // 新增
        title: "Creative Games",
        icon: "material-symbols:palette",
        href: "/en/games/creative",
      },
      music: {  // 新增
        title: "Music Games",
        icon: "material-symbols:music-note",
        href: "/en/games/music",
      },
    },
  },
  download: {
    title: "火柴人模组下载",
    type: "page",
    icon: "material-symbols:download",
    href: "/zh/download",
  },
};
