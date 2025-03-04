// URL 优先级配置
const URL_PRIORITIES = [
  {
    pattern: "^/$", // 首页
    priority: 1.0,
    changefreq: "daily",
  },
  {
    pattern: "^/games", // 游戏页面
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    pattern: ".*", // 默认配置
    priority: 0.5,
    changefreq: "weekly",
  },
];

// 支持的语言配置
const SUPPORTED_LOCALES = {
  en: {
    name: "English",
    localeName: "English",
    ogLocale: "en_US",
    htmlLang: "en",
    titleSuffix: "- sprunki", //titleSuffix 的主要作用是为网站的页面标题提供一个统一的后缀，以增强品牌识别、提高可读性和优化 SEO
    isDefault: true,
  },
  zh: {
    name: "中文",
    localeName: "简体中文",
    ogLocale: "zh_CN",
    htmlLang: "zh-CN",
    titleSuffix: "- sprunki",
  },
};

// 网站配置
const SITE_CONFIG = {
  url: "sprunkiincrediboxes.org",
  title: "sprunki incredibox",
  description: "This is a website specifically designed for sprunki enthusiasts, offering a wealth of games and creative content.",
  twitter: "@",
  siteName: "sprunki",
};

// 获取所有语言代码数组
const LOCALE_CODES = Object.keys(SUPPORTED_LOCALES);

// 获取默认语言
const DEFAULT_LOCALE =
  Object.entries(SUPPORTED_LOCALES).find(
    ([_, config]) => config.isDefault
  )?.[0] || "en";

module.exports = {
  SUPPORTED_LOCALES,
  SITE_CONFIG,
  LOCALE_CODES,
  DEFAULT_LOCALE,
  URL_PRIORITIES,
};


/*
site.js 文件是 Nextra 模板中的一个标准配置文件，通常用于定义网站的基本设置和功能。Nextra 是一个基于 Next.js 的文档站点框架，提供了灵活的配置选项以支持多语言、主题定制、页面布局等功能。
site.js 的常见内容
在标准的 Nextra 模板中，site.js 文件通常包含以下内容：
1 网站基础信息:
网站名称、描述、URL 等。
2 多语言支持:
定义支持的语言及其相关配置，如语言名称、语言代码、是否为默认语言等。
3 主题配置:
主题的样式、颜色、布局等设置。
4 功能开关:
启用或禁用特定功能，如多语言支持、深色模式等。
5. 导航和路由配置:
定义网站的导航结构和路由信息。
示例结构
以下是一个典型的 site.js 文件结构示例：
export const SITE_CONFIG = {
  title: "我的网站",
  description: "这是一个使用 Nextra 构建的网站。",
  url: "https://example.com",
  features: {
    i18n: true, // 启用多语言支持
    darkMode: true, // 启用深色模式
  },
  supportedLocales: {
    en: {
      name: "English",
      localeName: "English",
      isDefault: true,
    },
    zh: {
      name: "中文",
      localeName: "简体中文",
    },
  },
  // 其他配置...
};
结论
如果你的 site.js 文件包含类似的结构和内容，那么它就是一个标准的 Nextra 模板配置文件。你可以根据项目的需求进行相应的修改和扩展。
*/