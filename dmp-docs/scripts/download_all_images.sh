#!/bin/bash

# Feishu Image Downloader for DMP Help Center
# Downloads all images from the Feishu document and saves them to static/img/admin

DOC_TOKEN="KAwYwIzlriHW4fkoImJcO4eMnJe"
OUTPUT_DIR="/root/.openclaw/workspace/dmp-docs/dmp-docs/static/img/admin"
TOKEN="t-g10441gMN3VISBA2NMXJNLUESOURWP27JZRSPM7X"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "=== DMP Help Center Image Downloader ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

# Array of image tokens and their target filenames
SUCCESS_COUNT=0
FAILED_COUNT=0

# Function to download image
download_image() {
  local token="$1"
  local filename="$2"
  
  echo -n "Downloading: $filename ... "
  
  HTTP_CODE=$(curl -s -w "%{http_code}" "https://open.feishu.cn/open-apis/drive/v1/medias/${token}/download" \
       -H "Authorization: Bearer ${TOKEN}" \
       -o "${OUTPUT_DIR}/${filename}" 2>/dev/null)
  
  if [ "$HTTP_CODE" = "200" ]; then
    # Check if file was downloaded successfully (non-empty)
    if [ -s "${OUTPUT_DIR}/${filename}" ]; then
      FILESIZE=$(ls -lh "${OUTPUT_DIR}/${filename}" | awk '{ print $5 }')
      echo "OK (${FILESIZE})"
      SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
      echo "FAILED (empty file)"
      rm -f "${OUTPUT_DIR}/${filename}"
      FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
  else
    echo "FAILED (HTTP $HTTP_CODE)"
    rm -f "${OUTPUT_DIR}/${filename}"
    FAILED_COUNT=$((FAILED_COUNT + 1))
  fi
}

# Account Management Section
download_image "EiDCbE9dQo6E2DxInrBcxtIbn5g" "account-management.png"
download_image "B2AXbfkxjolPO8xvCLTczj6Lnif" "add-account-form.png"
download_image "XgOVbTdXHoCcRRxpZevccP4rnfg" "role-management.png"
download_image "FIpub4t0yodexnxviUvcsTXMnUn" "new-role-form.png"

# Category Management Section
download_image "JmVkbAP4WovTtdxjIotc5h6Infe" "category-selection.png"
download_image "JEjRbLE5woNBn6x8oTycFN4tnvc" "backend-categories.png"
download_image "E8N2bnQpVoKpfjxwL81czzE3nEA" "leaf-category-config.png"

# Standard Functions Section
download_image "FHd1boz3ToNL3YxEnjfczFA3nwd" "create-function.png"
download_image "B7H0b2JmGomSEtxRP4Vc9KqQnRc" "associated-products.png"

# Five-Tuple Generation Section
download_image "YTKmbiiLAo3h5VxUqxjcoIpfnja" "continue-development.png"
download_image "XdOHb5azcosn5KxqpRdc1rNPnFf" "generate-auth-code.png"
download_image "SRH9b64GZozR7dxHCwAcryavnnb" "confirm-dialog.png"
download_image "EFv7bSkB3obYCxx7mL9c6vAOn0y" "export-auth-code.png"
download_image "HZKgbYOYmoSk4LxsKtfcYgwAnNo" "exported-file.png"

# APP Management Section
download_image "FkyPbIXuSohEOax61hmckSjGnbd" "add-app-page.png"
download_image "X7vNbcfeto7pe5xPZzqcU42Gnbf" "fill-app-info.png"
download_image "JiHabI5ksoUHUMxOTExcRQkjn9g" "app-bundle-info.png"
download_image "UlhDbFzfboMofgx7mazcbvUUnQ3" "app-config-modify.png"

# Push Certificate Section
download_image "WSR0bU5grosZGVxMAx9cWQ1ynrc" "android-push-cert.png"
download_image "WEXPbO2bWo7qkfxjqNwcEEDOnah" "ios-push-cert.png"

# Publishing Configuration Section
download_image "LUHAbezO1oD8d5x25QWcYbrZnI8" "publishing-config.png"
download_image "MxtGboyfhogXnpxBSuAcs7jWnpf" "select-app-dropdown.png"

# Agreement Configuration Section
download_image "LNARbnXNjoqa7Uxz4gQcx2f1nad" "add-agreement-version.png"
download_image "Gf3wbdIlLoAod0xp2ajcHh3Mn2f" "edit-agreement-content.png"
download_image "GWpSbgHQIo6g7Wx0ekpcdJeonhf" "enable-agreement.png"

# Network Provisioning Section
download_image "DRtxb6e6GoXNXzxIaHRcNFHDn5b" "bluetooth-provisioning.png"
download_image "UfU8bzi3VoDMXKxfZmtc3OUUnFb" "scan-qr-code.png"
download_image "QI59bNW2aopLc5xA9O1ckde2noh" "select-device-model.png"
download_image "YUqQbvcApoZ2XfxIGN5cBbqMnAe" "provisioning-guide.png"
download_image "DFxrbmFmkoiXjMx2G7fcGefvncg" "wizard-config.png"
download_image "EcsXbCVvKolUd2xv9bicPd9QnXe" "frontend-categories.png"
download_image "KCCybdINMoiTccxVYfFcS25mnhf" "configure-wizard.png"

# Cloud Storage Section
download_image "BmmhbmOt3oj0T1xvOBlcE1Agnwc" "cloud-storage-example.png"
download_image "MWu6bnUkdowbtwxH3iScBFzJnuh" "cloud-storage-templates.png"
download_image "CREobmdFGofISGxkJZScyC7sn0c" "create-template.png"
download_image "Qexbb03RGoQ0djxhPJRcRp3rnre" "create-product.png"
download_image "ECewbg3sCobPvlxVmTwcxV2qnrf" "product-details.png"
download_image "IRjRbZrgzo6fDwx2tp3cwBdJn7e" "product-grouping.png"
download_image "GEy7bsZeuo7koFxkQlocKcoJnLg" "product-group-add.png"
download_image "Iyq2bOsQsozwP7xSUKScn4RgnRe" "product-shelves.png"

# Knowledge Base Section
download_image "DLJhb8tc2oPfjlxUbp5cj1bwncg" "app-knowledge-base.png"
download_image "LA6ybKq6Mor8fPxEAo7c3Sh3nof" "app-knowledge-base-2.png"
download_image "VHU7bDICaoHoSHxLDibc8c6Tnbd" "device-knowledge-base.png"
download_image "Zd3ZbvJK0omq9NxACmdcoqKCnEf" "device-knowledge-base-2.png"
download_image "Q0iebcBAhoHvVDx9RjqcXB4znhh" "device-knowledge-base-3.png"
download_image "LGsKb1X96oYZnsxXnKgcUzm5nOb" "create-knowledge-base.png"
download_image "DdrUb07lhoHbrhxzREjcpDsHnuh" "create-knowledge-base-2.png"
download_image "CCbfbqn0foZe8vxeKoucifuwnnf" "add-first-level-category.png"
download_image "PxlobqEPUop0eWxCdtrcJ6Ngnyd" "add-first-level-category-2.png"
download_image "NEPUbenCAooCfPxmoztc1LDfnjg" "create-subcategory.png"
download_image "MrThbxGDVo1dH4xAYiwcBS38n9c" "create-knowledge-article.png"
download_image "UiDQbkUhtocJPqxESTvcSLx8neh" "manage-knowledge-articles.png"
download_image "SNJbbu8AsoGu1ixZrEdcNjmunzh" "manage-knowledge-articles-2.png"

# After-sales and Push Management Section
download_image "CYZEbc8G5oAJZIxG5yzcSlvRnCv" "after-sales-management.png"
download_image "NGNVbK10xo9qaKxyBUlcDOONnic" "create-push-notification.png"
download_image "TCjmbcd1MogyrAx0dC4c7JP0nwd" "create-push-2.png"
download_image "PQx4blFr0oDirrx5N9Ec6ncGngK" "create-push-3.png"
download_image "FsA2b24pyo8CYXx8Q9YcQnkendh" "create-push-4.png"
download_image "IJlFbYXgcocqVkxGjxicc49bnK9" "push-review.png"
download_image "MDJMb125Do7XkcxtOu9cOhman1e" "target-audience.png"
download_image "RIQmbcRicoEYA3xGPrscVNblnFg" "create-audience.png"
download_image "RcDZb5AdEopBUDxlIGJcEbtDntg" "edit-audience.png"

# Order Management Section
download_image "Nnr9bUJJKoyhf3xUToAcjk9cnVd" "order-management.png"
download_image "W37Db51sbojU7XxnR3EcgQ6Un0b" "unsubscribe-dialog.png"
download_image "CVMWb1p8moQR75xda0pcKt03nog" "refund-method.png"

echo ""
echo "=== Download Summary ==="
echo "Successful: $SUCCESS_COUNT"
echo "Failed: $FAILED_COUNT"
echo ""
echo "Images saved to: $OUTPUT_DIR"
ls -la "$OUTPUT_DIR" | tail -5
