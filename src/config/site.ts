// 定义语言配置的接口
export interface LocaleConfig {
  name: string;
  localeName: string;
  ogLocale: string;
  htmlLang: string;
  titleSuffix: string;
  isDefault?: boolean;
}

// 定义网站配置的接口
export interface SiteConfig {
  url: string;
  title: string;
  twitter: string;
  siteName: string;
}

// 定义 URL 优先级配置接口
export interface URLPriorityConfig {
  pattern: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// URL 优先级配置
export const URL_PRIORITIES: URLPriorityConfig[] = [
  {
    pattern: "^/$",  // 首页
    priority: 1.0,
    changefreq: "daily",
  },
  {
    pattern: "^/games",  // 游戏页面
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    pattern: "^/games/fighting",  // 格斗游戏页面
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    pattern: "^/about",  // 关于页面
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    pattern: ".*",  // 默认配置
    priority: 0.5,
    changefreq: "weekly",
  },
] as const;

// 支持的语言配置
export const SUPPORTED_LOCALES: Record<string, LocaleConfig> = {
  en: {
    name: "English",
    localeName: "English",
    ogLocale: "en_US",
    htmlLang: "en",
    titleSuffix: "- 网站后缀名",
    isDefault: true,
  },
  zh: {
    name: "中文",
    localeName: "简体中文",
    ogLocale: "zh_CN",
    htmlLang: "zh-CN",
    titleSuffix: "- 网站后缀名",
  },
} as const;

// 网站配置
export const SITE_CONFIG: SiteConfig = {
  url: "",
  title: "",
  twitter: "@",
  siteName: "",
} as const;

// 获取所有语言代码数组
export const LOCALE_CODES = Object.keys(SUPPORTED_LOCALES);

// 获取默认语言
export const DEFAULT_LOCALE = Object.entries(SUPPORTED_LOCALES).find(
  ([_, config]) => config.isDefault
)?.[0] || "en"; 