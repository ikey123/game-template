import nextra from "nextra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextra = nextra({
  theme: "./src/theme/index.tsx",
  themeConfig: "./theme.config.jsx",
});

export default withNextra({
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
});
