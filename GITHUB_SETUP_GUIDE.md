# DMP帮助中心 - GitHub仓库设置指南

## 一、创建GitHub仓库

### 步骤1：注册/登录GitHub
访问 https://github.com → 注册或登录你的账号

### 步骤2：创建新仓库
1. 点击右上角 **+** → **New repository**
2. 填写仓库信息：
   - **Repository name**: `dmp-help-center`（或其他你喜欢的名字）
   - **Description**: DMP设备管理平台帮助中心文档
   - **Public** / **Private**: 选Public（免费托管）
   - 勾选 **Add a README file**（可选）
3. 点击 **Create repository**

### 步骤3：告诉我仓库地址
创建成功后，地址格式为：
```
https://github.com/你的用户名/dmp-help-center
```

把这个地址发给我，我会把代码推送上去。

---

## 二、仓库结构说明

推送后你会看到以下结构：

```
dmp-help-center/
├── docs/                          # 文档内容目录
│   ├── intro.md                   # 首页
│   ├── 快速开始/
│   │   ├── 平台简介.md
│   │   ├── 账号注册.md
│   │   └── 创建项目.md
│   ├── 设备管理/
│   ├── 用户权限/
│   ├── 增值服务/
│   ├── 开放接口/
│   └── 常见问题/
├── docusaurus.config.js           # 站点配置（标题、颜色等）
├── sidebars.js                    # 侧边栏导航配置
├── package.json                   # 依赖配置
└── README.md                      # 仓库说明
```

---

## 三、编辑方式（GitHub网页版）

### 编辑现有文档

1. 打开GitHub仓库页面
2. 进入 `docs/` 目录
3. 点击进入要编辑的文件（如 `快速开始/平台简介.md`）
4. 点击右上角 **✏️ 铅笔图标**（Edit this file）
5. 修改内容（使用Markdown格式）
6. 滚动到页面底部，填写提交信息：
   - **Commit changes**: 简要描述修改内容
   - 选择 **Commit directly to the main branch**
7. 点击 **Commit changes**

### 创建新文档

1. 进入对应目录（如 `docs/设备管理/`）
2. 点击 **Add file** → **Create new file**
3. 填写文件名（如 `OTA升级.md`）
4. 编辑内容
5. 提交保存

### 添加新栏目

1. 在 `docs/` 下创建新文件夹（如 `故障排查/`）
2. 在该文件夹内创建 `_category_.json` 文件：
```json
{
  "label": "故障排查",
  "position": 7,
  "link": {
    "type": "generated-index",
    "description": "故障排查指南"
  }
}
```
3. 在文件夹内创建文章
4. 更新 `sidebars.js` 文件（可让我帮你改）

---

## 四、Markdown基础语法

| 效果 | 语法 |
|------|------|
| 标题 | `# 一级标题` `## 二级标题` |
| 加粗 | `**加粗文字**` |
| 列表 | `- 项目1` `- 项目2` |
| 链接 | `[链接文字](https://example.com)` |
| 图片 | `![描述](图片地址)` |
| 表格 | 见下方示例 |
| 代码块 | \`\`\`yaml 代码 \`\`\` |

**表格示例：**
```markdown
| 字段 | 说明 |
|------|------|
| name | 设备名称 |
| status | 设备状态 |
```

---

## 五、网站自动更新

### 方案A：GitHub Actions自动部署（推荐）

我会帮你配置，推送代码后自动部署到：
- **GitHub Pages**（免费）：`https://你的用户名.github.io/dmp-help-center`
- **Vercel**（免费）：`https://dmp-docs.vercel.app`

### 方案B：Vercel一键部署

1. 访问 https://vercel.com
2. 用GitHub账号登录
3. 导入仓库
4. 一键部署

---

## 六、常见问题

**Q: 修改后网站没有更新？**
- GitHub Pages：可能需要几分钟同步
- Vercel：检查部署日志

**Q: 不会Markdown怎么办？**
- 直接写纯文本，我帮你排版
- 或用飞书写好发给我转换

**Q: 要改颜色/标题？**
- 修改 `docusaurus.config.js` 文件
- 或发给我，我帮你改

**Q: 要加搜索功能？**
- 可申请 Algolia DocSearch（免费）
- 或我帮你配置本地搜索

---

## 七、快速检查清单

每次编辑后确认：
- [ ] 文件名以 `.md` 结尾
- [ ] 文件保存在正确的目录
- [ ] 提交信息写清楚修改内容
- [ ] 5分钟后检查网站是否更新

---

## 八、需要帮助？

随时发给我：
- 不会操作 → 我截图/录屏教你
- 格式有问题 → 发内容我帮你排好
- 要加新功能 → 我评估后实现

**记住：技术问题我全包，你只管写内容。**
