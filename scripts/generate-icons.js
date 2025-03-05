const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const svg = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));
  
  // 生成 favicon.ico
  await sharp(svg)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../public/favicon.ico'));
    
  // 生成 PNG 图标
  const sizes = [16, 32, 180];
  for (const size of sizes) {
    await sharp(svg)
      .resize(size, size)
      .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
  }
  
  // 重命名 180x180 为 apple-touch-icon
  fs.renameSync(
    path.join(__dirname, '../public/favicon-180x180.png'),
    path.join(__dirname, '../public/apple-touch-icon.png')
  );
}

generateIcons().catch(console.error);