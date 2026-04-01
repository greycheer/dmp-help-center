# GitHub Pages 配置指南

## ✅ 代码已推送成功

仓库地址：https://github.com/greycheer/dmp-help-center

---

## 配置步骤（2分钟）

### 1. 进入仓库设置
1. 打开 https://github.com/greycheer/dmp-help-center
2. 点击顶部 **Settings** 标签
3. 左侧菜单选择 **Pages**

### 2. 配置Pages
- **Source**: 选择 **GitHub Actions**
- （无需其他设置，已配置好工作流）

### 3. 触发首次部署
1. 点击仓库主页的 **Actions** 标签
2. 应该能看到 "Deploy to GitHub Pages" 工作流
3. 点击右侧 **Run workflow** → **Run workflow**
4. 等待约2分钟，部署完成

### 4. 查看网站
部署完成后，访问：
```
https://greycheer.github.io/dmp-help-center
```

---

## 配置完成后的效果

- 每次你修改 `docs/` 目录下的文件并推送到main分支
- 网站会自动重新部署（约2分钟）
- 你可在Actions标签查看部署状态

---

## 快速测试编辑

### 方法：GitHub网页直接编辑

1. 打开 https://github.com/greycheer/dmp-help-center
2. 进入 `docs/快速开始/平台简介.md`
3. 点击右上角 ✏️ **铅笔图标**
4. 修改任意内容（如把"DMP是什么？"改成"DMP是什么平台？"）
5. 滚动到底部，填写 **Commit changes**
6. 点击 **Commit changes**
7. 等待2分钟，访问网站查看更新

---

## 遇到问题？

### 部署失败
- 检查Actions页面是否有错误日志
- 常见原因：node版本问题（已配置v20，应该没问题）

### 网站404
- 确认Settings → Pages → Source是GitHub Actions
- 等待首次部署完成（首次可能需要5分钟）

### 内容未更新
- 检查Actions是否已完成部署
- 清除浏览器缓存（Ctrl+Shift+R）

---

## 后续维护

### 添加新文章
1. 在对应目录创建 `.md` 文件
2. 文件顶部添加：
```markdown
---
sidebar_position: 4
---

# 文章标题

内容...
```
3. 提交并推送

### 添加新栏目
1. 在 `docs/` 下创建新文件夹
2. 添加 `_category_.json` 文件：
```json
{
  "label": "新栏目名称",
  "position": 7,
  "link": {
    "type": "generated-index",
    "description": "栏目描述"
  }
}
```
3. 在文件夹内创建文章
4. 更新 `sidebars.js`（可选，自动识别）

---

## 需要帮助？

随时发给我：
- 部署报错截图
- 想加的功能
- 不会的操作

**技术问题我全包。**
