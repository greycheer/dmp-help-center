# DMP Help Center

Documentation site for DMP (Device Management Platform) built with Docusaurus.

## 📚 Documentation Structure

| Section | Description | Audience |
|---------|-------------|----------|
| **📊 Platform Admin** | Platform administration, device management, user permissions | Platform administrators, operators |
| **💻 Developer Guide** | API documentation, device integration, product development | Hardware developers, system integrators |

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory.

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## 🔍 Search

The documentation includes a local search feature powered by `@easyops-cn/docusaurus-search-local`.

## 📝 Content Organization

```
docs/
├── intro.md                           # Homepage
├── admin/                             # Platform Admin docs
│   ├── quick-start/                   # Getting started
│   ├── device-mgmt/                   # Device management
│   ├── user-permissions/              # User & permissions
│   ├── services/                      # Value-added services
│   └── troubleshooting/               # Troubleshooting
└── developer/                         # Developer docs
    ├── getting-started/               # Getting started
    ├── product-dev/                   # Product development
    ├── device-integration/            # Device integration
    ├── api/                           # API reference
    └── ota/                           # OTA updates
```

## 🛠️ Customization

### Brand Colors

Edit `src/css/custom.css` to change the brand colors.

Current brand color: `#1890ff` (Tech Blue)

### Search Configuration

Search settings can be modified in `docusaurus.config.js` under the `@easyops-cn/docusaurus-search-local` plugin section.

## 📄 License

Copyright © 2026 DMP Platform. All rights reserved.
