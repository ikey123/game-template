import { useRouter } from "nextra/hooks";
import { getLocaleMessages } from "./src/config/locales";

export default {
  logo: <span>网站名称 logo</span>,
  i18n: [
    { locale: "en", name: "English" },
    { locale: "zh", name: "中文" },
  ],
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
    forcedTheme: undefined,
  },
  search: {
    placeholder: function SearchPlaceholder() {
      const { locale } = useRouter();
      return getLocaleMessages(locale).ui.searchPlaceholder;
    },
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    title: function TocTitle() {
      const { locale } = useRouter();
      return getLocaleMessages(locale).ui.tocTitle;
    },
  },
  feedback: {
    content: function FeedbackContent() {
      const { locale } = useRouter();
      return getLocaleMessages(locale).ui.feedbackText;
    },
  },
  editLink: {
    text: function EditLinkText() {
      const { locale } = useRouter();
      return getLocaleMessages(locale).ui.editLinkText;
    },
  },
  siteName: "网站名称",

  // 主题颜色配置
  primaryColor: "#81c869", // 主题色

  // 背景颜色
  backgroundColor: {
    light: "#ffffff",
    dark: "#111111",
  },

  // 导航栏高度
  style: {
    navbarHeight: "5rem", // 80px
  },
};
