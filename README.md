# DMP Help Center

Documentation site for DMP (Device Management Platform) built with Docusaurus.

## Documentation Structure

- **Admin Manual**: Platform administration guide for administrators
- **Developer Manual**: Development guide for hardware developers

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Structure

```
dmp-help-center/
├── docs/
│   ├── intro.md              # Introduction page
│   ├── admin/
│   │   └── index.md          # Admin manual
│   └── developer/
│       └── index.md          # Developer manual
├── static/
│   └── img/
│       └── docs/             # Documentation images
├── docusaurus.config.js      # Docusaurus configuration
└── sidebars.js               # Sidebar navigation
```
