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
      creative: {
        title: "创意游戏",
        icon: "material-symbols:palette",
        href: "/zh/games/creative",
        // 以下为显式映射子页面，注释掉供未来使用
        /*
        items: {
          "sprunki-maker": { title: "Sprunki Maker（中文）" },
          "sprunki-oc-maker": { title: "Sprunki OC Maker（中文）" },
        },
        */
      },
      music: {
        title: "音乐游戏",
        icon: "material-symbols:music-note",
        href: "/zh/games/music",
        // 以下为显式映射子页面，注释掉供未来使用
        /*
        items: {
          "incredibox---sprunki-oc": { title: "Incredibox - Sprunki (OC)（中文）" },
          "sprunki": { title: "Sprunki（中文）" },
          "sprunki---interactive-beta": { title: "Sprunki - Interactive BETA（中文）" },
          "sprunki---vectors": { title: "Sprunki - Vectors（中文）" },
          "sprunki-but-dandys-world": { title: "Sprunki but Dandy's World（中文）" },
          "sprunki-phase-5": { title: "Sprunki Phase 5（中文）" },
          "sprunki-retake-friendly": { title: "Sprunki Retake (Friendly)（中文）" },
        },
        */
      },
    },
  },
  /*download: {
    title: "下载",
    type: "page",
    icon: "material-symbols:download",
    href: "/zh/download",
  }, */
};