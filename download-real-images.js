const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.FEISHU_TOKEN;
if (!TOKEN) {
  console.error('Please set FEISHU_TOKEN environment variable');
  process.exit(1);
}

// Feishu image tokens from admin and developer docs
const adminImages = [
  { token: "EiDCbE9dQo6E2DxInrBcxtIbn5g", name: "admin-account-management-01" },
  { token: "B2AXbfkxjolPO8xvCLTczj6Lnif", name: "admin-account-management-02" },
  { token: "XgOVbTdXHoCcRRxpZevccP4rnfg", name: "admin-role-management-01" },
  { token: "FIpub4t0yodexnxviUvcsTXMnUn", name: "admin-role-management-02" },
  { token: "JmVkbAP4WovTtdxjIotc5h6Infe", name: "admin-category-management-01" },
  { token: "JEjRbLE5woNBn6x8oTycFN4tnvc", name: "admin-category-management-02" },
  { token: "E8N2bnQpVoKpfjxwL81czzE3nEA", name: "admin-category-management-03" },
  { token: "FHd1boz3ToNL3YxEnjfczFA3nwd", name: "admin-standard-function-01" },
  { token: "B7H0b2JmGomSEtxRP4Vc9KqQnRc", name: "admin-standard-function-02" },
  { token: "YTKmbiiLAo3h5VxUqxjcoIpfnja", name: "admin-five-tuple-01" },
  { token: "XdOHb5azcosn5KxqpRdc1rNPnFf", name: "admin-five-tuple-02" },
  { token: "SRH9b64GZozR7dxHCwAcryavnnb", name: "admin-five-tuple-03" },
  { token: "EFv7bSkB3obYCxx7mL9c6vAOn0y", name: "admin-five-tuple-04" },
  { token: "HZKgbYOYmoSk4LxsKtfcYgwAnNo", name: "admin-five-tuple-05" },
  { token: "FkyPbIXuSohEOax61hmckSjGnbd", name: "admin-create-app-01" },
  { token: "X7vNbcfeto7pe5xPZzqcU42Gnbf", name: "admin-create-app-02" },
  { token: "JiHabI5ksoUHUMxOTExcRQkjn9g", name: "admin-create-app-03" },
  { token: "UlhDbFzfboMofgx7mazcbvUUnQ3", name: "admin-app-config-01" },
  { token: "LUHAbezO1oD8d5x25QWcYbrZnI8", name: "admin-app-list-01" },
  { token: "MxtGboyfhogXnpxBSuAcs7jWnpf", name: "admin-app-list-02" },
  { token: "LNARbnXNjoqa7Uxz4gQcx2f1nad", name: "admin-agreement-01" },
  { token: "Gf3wbdIlLoAod0xp2ajcHh3Mn2f", name: "admin-agreement-02" },
  { token: "GWpSbgHQIo6g7Wx0ekpcdJeonhf", name: "admin-agreement-03" },
  { token: "WSR0bU5grosZGVxMAx9cWQ1ynrc", name: "admin-push-cert-01" },
  { token: "WEXPbO2bWo7qkfxjqNwcEEDOnah", name: "admin-push-cert-02" },
  { token: "DRtxb6e6GoXNXzxIaHRcNFHDn5b", name: "admin-provisioning-01" },
  { token: "UfU8bzi3VoDMXKxfZmtc3OUUnFb", name: "admin-provisioning-02" },
  { token: "QI59bNW2aopLc5xA9O1ckde2noh", name: "admin-provisioning-03" },
  { token: "YUqQbvcApoZ2XfxIGN5cBbqMnAe", name: "admin-provisioning-04" },
  { token: "DFxrbmFmkoiXjMx2G7fcGefvncg", name: "admin-provisioning-05" },
  { token: "EcsXbCVvKolUd2xv9bicPd9QnXe", name: "admin-frontend-category-01" },
  { token: "KCCybdINMoiTccxVYfFcS25mnhf", name: "admin-frontend-category-02" },
  { token: "BmmhbmOt3oj0T1xvOBlcE1Agnwc", name: "admin-cloud-storage-01" },
  { token: "MWu6bnUkdowbtwxH3iScBFzJnuh", name: "admin-cloud-storage-02" },
  { token: "CREobmdFGofISGxkJZScyC7sn0c", name: "admin-cloud-storage-03" },
  { token: "Qexbb03RGoQ0djxhPJRcRp3rnre", name: "admin-cloud-storage-04" },
  { token: "ECewbg3sCobPvlxVmTwcxV2qnrf", name: "admin-cloud-storage-05" },
  { token: "IRjRbZrgzo6fDwx2tp3cwBdJn7e", name: "admin-cloud-storage-06" },
  { token: "GEy7bsZeuo7koFxkQlocKcoJnLg", name: "admin-cloud-storage-07" },
  { token: "Iyq2bOsQsozwP7xSUKScn4RgnRe", name: "admin-cloud-storage-08" },
  { token: "DLJhb8tc2oPfjlxUbp5cj1bwncg", name: "admin-knowledge-base-01" },
  { token: "LA6ybKq6Mor8fPxEAo7c3Sh3nof", name: "admin-knowledge-base-02" },
  { token: "VHU7bDICaoHoSHxLDibc8c6Tnbd", name: "admin-knowledge-base-03" },
  { token: "Zd3ZbvJK0omq9NxACmdcoqKCnEf", name: "admin-knowledge-base-04" },
  { token: "Q0iebcBAhoHvVDx9RjqcXB4znhh", name: "admin-knowledge-base-05" },
  { token: "LGsKb1X96oYZnsxXnKgcUzm5nOb", name: "admin-knowledge-base-06" },
  { token: "DdrUb07lhoHbrhxzREjcpDsHnuh", name: "admin-knowledge-base-07" },
  { token: "CCbfbqn0foZe8vxeKoucifuwnnf", name: "admin-knowledge-base-08" },
  { token: "PxlobqEPUop0eWxCdtrcJ6Ngnyd", name: "admin-knowledge-base-09" },
  { token: "NEPUbenCAooCfPxmoztc1LDfnjg", name: "admin-knowledge-base-10" },
  { token: "MrThbxGDVo1dH4xAYiwcBS38n9c", name: "admin-knowledge-base-11" },
  { token: "UiDQbkUhtocJPqxESTvcSLx8neh", name: "admin-knowledge-base-12" },
  { token: "SNJbbu8AsoGu1ixZrEdcNjmunzh", name: "admin-knowledge-base-13" },
  { token: "CYZEbc8G5oAJZIxG5yzcSlvRnCv", name: "admin-after-sales-01" },
  { token: "NGNVbK10xo9qaKxyBUlcDOONnic", name: "admin-push-01" },
  { token: "TCjmbcd1MogyrAx0dC4c7JP0nwd", name: "admin-push-02" },
  { token: "PQx4blFr0oDirrx5N9Ec6ncGngK", name: "admin-push-03" },
  { token: "FsA2b24pyo8CYXx8Q9YcQnkendh", name: "admin-push-04" },
  { token: "IJlFbYXgcocqVkxGjxicc49bnK9", name: "admin-push-05" },
  { token: "MDJMb125Do7XkcxtOu9cOhman1e", name: "admin-audience-01" },
  { token: "RIQmbcRicoEYA3xGPrscVNblnFg", name: "admin-audience-02" },
  { token: "RcDZb5AdEopBUDxlIGJcEbtDntg", name: "admin-audience-03" },
  { token: "Kr7NbvKrio0L00xYARxcT2FXnYb", name: "admin-device-01" },
  { token: "Bz3ebRMHnoyaDUxAwCicln9rnUe", name: "admin-device-02" },
  { token: "G66yb3bnAoVXK2xmy2bcLynzn5b", name: "admin-device-03" },
  { token: "Die5bAxyXoidqCxmKbGcej42ncd", name: "admin-device-04" },
  { token: "CDVobUBZco55Xtx6777c0HuTn3n", name: "admin-device-05" },
  { token: "VH07bUP5bo3ZMVxHRlicTjClnRd", name: "admin-device-06" },
  { token: "KTGWbV7PQokw1zxcKjxc2woAndf", name: "admin-device-07" },
  { token: "Frr3bilFPoFDVUx0E9LcG4tjnkf", name: "admin-device-08" },
  { token: "YKHvbiuvSoYWilxgKcScFBv5ndf", name: "admin-device-09" }
];

const developerImages = [
  { token: "K4MSbqPaSoSTB4xzlI5cOyqgnld", name: "dev-product-dev-01" },
  { token: "FBbabVv2to7Ct5xYIqqcjRJ4n4e", name: "dev-product-dev-02" },
  { token: "F9ogb7UoVoCAftx8FK6c0Vp5nDc", name: "dev-firmware-01" },
  { token: "FPJebO4lcosC7bxwAg0cuwiYn8b", name: "dev-firmware-02" },
  { token: "X28SbyWl5oU6HxxvVDscvj32nph", name: "dev-firmware-03" },
  { token: "DyLubI4hPoM8uuxD1Tkcce3intw", name: "dev-firmware-04" },
  { token: "Zm1fbCUuhoj8mnxcT5FcqSt3nG3", name: "dev-firmware-05" },
  { token: "UQXabmeHZo0AiQxROfncr2HAnVg", name: "dev-firmware-06" },
  { token: "Brb5bx0lnoJl5lxJm0lcUk2ZnOc", name: "dev-device-interaction-01" },
  { token: "GBiabvLI7oqWulxc46icI627n0e", name: "dev-product-display-01" },
  { token: "B9rsbywCpoLOpCx7uUKcgdownXg", name: "dev-function-group-01" },
  { token: "PbYgbBr4Eop583xn7uJcsoIXnPg", name: "dev-function-group-02" },
  { token: "T32fbfo3HosgDSxGW6fcu3RPnyh", name: "dev-function-group-03" },
  { token: "YNIpbzeSVoVGVIx975YciYG6nFf", name: "dev-function-group-04" },
  { token: "LNgVbFc15oUAU3xGwfncOdumn0d", name: "dev-function-group-05" },
  { token: "K6UjboKX2oDdKrxf2G1cQIJ0nBV", name: "dev-function-group-06" },
  { token: "I06ZbIif6og7XqxtBqZcsJGLn3g", name: "dev-function-group-07" },
  { token: "Ern1bueTMoBy2jxdPvgcoxeFnNd", name: "dev-firmware-mgmt-01" },
  { token: "HrUzbkVwgoioNUxmsx6cymAcnNh", name: "dev-firmware-mgmt-02" },
  { token: "PWFybQ4Y2oboz2xsbQbcVIF6n2g", name: "dev-firmware-mgmt-03" },
  { token: "DuBXbAaFxoS42HxFAcXcixaNnGf", name: "dev-firmware-mgmt-04" },
  { token: "NOg6bNRAaojliGxS4c8cOfgnnVc", name: "dev-firmware-mgmt-05" }
];

const imgDir = path.join(__dirname, 'static', 'img', 'docs');

// Ensure directory exists
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Download single image using Feishu API
function downloadImage(token, filename) {
  return new Promise((resolve) => {
    const url = `https://open.feishu.cn/open-apis/drive/v1/medias/${token}/download`;
    const filePath = path.join(imgDir, `${filename}.png`);
    
    const options = {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    };
    
    const req = https.get(url, options, (res) => {
      // Handle redirect
      if (res.statusCode === 302 || res.statusCode === 301) {
        const redirectUrl = res.headers.location;
        https.get(redirectUrl, (redirectRes) => {
          const fileStream = fs.createWriteStream(filePath);
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✓ Downloaded: ${filename}.png`);
            resolve({ success: true, filename });
          });
        }).on('error', (err) => {
          console.error(`✗ Failed ${filename}: ${err.message}`);
          resolve({ success: false, filename, error: err.message });
        });
      } else if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${filename}.png`);
          resolve({ success: true, filename });
        });
      } else {
        console.error(`✗ Failed ${filename}: HTTP ${res.statusCode}`);
        resolve({ success: false, filename, error: `HTTP ${res.statusCode}` });
      }
    }).on('error', (err) => {
      console.error(`✗ Failed ${filename}: ${err.message}`);
      resolve({ success: false, filename, error: err.message });
    });
  });
}

async function main() {
  console.log('Downloading images from Feishu...\n');
  
  let success = 0;
  let failed = 0;
  const failedList = [];
  
  for (const img of adminImages) {
    const result = await downloadImage(img.token, img.name);
    if (result.success) success++;
    else {
      failed++;
      failedList.push(img.name);
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }
  
  for (const img of developerImages) {
    const result = await downloadImage(img.token, img.name);
    if (result.success) success++;
    else {
      failed++;
      failedList.push(img.name);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  
  console.log(`\n================================`);
  console.log(`Total: ${adminImages.length + developerImages.length} images`);
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
  if (failedList.length > 0) {
    console.log(`Failed files: ${failedList.join(', ')}`);
  }
}

main();
