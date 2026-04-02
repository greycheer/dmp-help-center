const fs = require('fs');
const path = require('path');
const https = require('https');

// 文档结构定义
const adminDocToken = 'P9yTddX2RoalLFxCHnbcPX5QnOb';
const devDocToken = 'XFzWdutGcoS0Ngxg1pWc9T1cnDg';

// 图片下载函数
function downloadImage(token, filename) {
  return new Promise((resolve, reject) => {
    const url = `https://open.feishu.cn/open-apis/drive/v1/medias/${token}/download`;
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${token}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// 处理文本元素
function processTextElements(elements) {
  if (!elements || elements.length === 0) return '';
  
  return elements.map(el => {
    if (el.text_run) {
      let text = el.text_run.content || '';
      const style = el.text_run.text_element_style || {};
      
      if (style.bold) text = `**${text}**`;
      if (style.italic) text = `*${text}*`;
      if (style.underline) text = `<u>${text}</u>`;
      if (style.strikethrough) text = `~~${text}~~`;
      if (style.inline_code) text = `\`${text}\``;
      if (style.link && style.link.url) {
        text = `[${text}](${decodeURIComponent(style.link.url)})`;
      }
      
      return text;
    }
    return '';
  }).join('');
}

// 处理单个block
function processBlock(block, blocksMap, level = 0) {
  const lines = [];
  const indent = '  '.repeat(level);
  
  switch (block.block_type) {
    case 1: // Page
      // Page title handled separately
      break;
    case 2: // Text
      if (block.text && block.text.elements) {
        const text = processTextElements(block.text.elements);
        if (text.trim()) {
          lines.push(`${text}\n`);
        }
      }
      break;
    case 3: // Heading 1
      if (block.heading1 && block.heading1.elements) {
        const text = processTextElements(block.heading1.elements);
        lines.push(`# ${text}\n`);
      }
      break;
    case 4: // Heading 2
      if (block.heading2 && block.heading2.elements) {
        const text = processTextElements(block.heading2.elements);
        lines.push(`## ${text}\n`);
      }
      break;
    case 5: // Heading 3
      if (block.heading3 && block.heading3.elements) {
        const text = processTextElements(block.heading3.elements);
        lines.push(`### ${text}\n`);
      }
      break;
    case 6: // Heading 4
      if (block.heading4 && block.heading4.elements) {
        const text = processTextElements(block.heading4.elements);
        lines.push(`#### ${text}\n`);
      }
      break;
    case 7: // Heading 5
      if (block.heading5 && block.heading5.elements) {
        const text = processTextElements(block.heading5.elements);
        lines.push(`##### ${text}\n`);
      }
      break;
    case 8: // Heading 6
      if (block.heading6 && block.heading6.elements) {
        const text = processTextElements(block.heading6.elements);
        lines.push(`###### ${text}\n`);
      }
      break;
    case 12: // Bullet list
      if (block.bullet && block.bullet.elements) {
        const text = processTextElements(block.bullet.elements);
        lines.push(`${indent}- ${text}\n`);
      }
      break;
    case 13: // Ordered list
      if (block.ordered && block.ordered.elements) {
        const text = processTextElements(block.ordered.elements);
        const seq = block.ordered.style?.sequence || '1';
        lines.push(`${indent}${seq}. ${text}\n`);
      }
      break;
    case 27: // Image
      if (block.image && block.image.token) {
        const token = block.image.token;
        const imgName = `img-${token}.png`;
        lines.push(`\n![image](/img/docs/${imgName})\n`);
        // Save image token for later download
        imageTokens.push({ token, filename: imgName });
      }
      break;
    case 30: // Sheet - placeholder for manual content
      lines.push('\n<!-- SHEET: Manual table content needed -->\n');
      if (block.sheet && block.sheet.token) {
        lines.push(`<!-- Sheet Token: ${block.sheet.token} -->\n`);
      }
      lines.push('\n');
      break;
  }
  
  // Process children
  if (block.children && block.children.length > 0) {
    for (const childId of block.children) {
      const childBlock = blocksMap.get(childId);
      if (childBlock) {
        const childLines = processBlock(childBlock, blocksMap, level + 1);
        lines.push(...childLines);
      }
    }
  }
  
  return lines;
}

let imageTokens = [];

// 处理文档
function processDocument(blocksData, outputFile) {
  imageTokens = [];
  const blocks = blocksData.blocks || [];
  const blocksMap = new Map();
  
  // Build block map
  for (const block of blocks) {
    blocksMap.set(block.block_id, block);
  }
  
  // Find root block
  const rootBlock = blocks.find(b => !b.parent_id);
  if (!rootBlock) {
    console.error('No root block found');
    return;
  }
  
  const lines = [];
  
  // Add page title
  if (rootBlock.page && rootBlock.page.elements) {
    const title = processTextElements(rootBlock.page.elements);
    lines.push(`# ${title}\n`);
  }
  
  // Process top-level children
  if (rootBlock.children) {
    for (const childId of rootBlock.children) {
      const childBlock = blocksMap.get(childId);
      if (childBlock) {
        const childLines = processBlock(childBlock, blocksMap, 0);
        lines.push(...childLines);
      }
    }
  }
  
  // Write output
  fs.writeFileSync(outputFile, lines.join(''));
  console.log(`Written to ${outputFile}`);
  console.log(`Found ${imageTokens.length} images`);
  
  return imageTokens;
}

module.exports = { processDocument, downloadImage };
