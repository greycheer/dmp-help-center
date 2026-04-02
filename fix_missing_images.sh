#!/bin/bash
# Remove missing image references from markdown files

cd /root/.openclaw/workspace/dmp-help-center-new

for doc in docs/admin/index.md docs/developer/index.md; do
  grep -oE '!\[([^]]*)\]\(/img/docs/[A-Za-z0-9]+\.png\)' "$doc" | while read -r line; do
    img=$(echo "$line" | grep -oE '/img/docs/[A-Za-z0-9]+\.png')
    fname=$(basename "$img")
    if [ ! -f "static/img/docs/$fname" ]; then
      echo "Removing missing image from $doc: $img"
      sed -i "s|!\[([^]]*)\]($img)||g" "$doc"
    fi
  done
done

echo "Done"
