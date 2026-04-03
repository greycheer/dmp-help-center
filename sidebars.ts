import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Home',
    },
    {
      type: 'category',
      label: '📘 Admin Manual',
      link: {
        type: 'doc',
        id: 'admin/index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '2.1 Platform Account and Role Management',
          collapsed: true,
          items: [
            'admin/2-1-1-section-overview',
            'admin/2-1-2-account-info',
            'admin/2-1-3-create-account',
            'admin/2-1-4-role-permissions',
          ],
        },
        {
          type: 'category',
          label: '2.2 Product Development Management',
          collapsed: true,
          items: [
            'admin/2-2-1-category-management',
            'admin/2-2-2-standard-functions',
            'admin/2-2-3-hardware-dev',
            'admin/2-2-4-five-tuple',
            'admin/2-2-5-firmware-upgrade',
          ],
        },
        {
          type: 'category',
          label: '2.3 APP Management',
          collapsed: true,
          items: [
            'admin/2-3-1-create-app',
            'admin/2-3-2-app-config',
            'admin/2-3-3-app-list',
            'admin/2-3-4-network-provisioning',
            'admin/2-3-5-cloud-storage',
          ],
        },
        {
          type: 'category',
          label: '2.4 Customer Relationship Management',
          collapsed: true,
          items: [
            'admin/2-4-1-knowledge-base',
            'admin/2-4-2-after-sales',
            'admin/2-4-3-push-management',
            'admin/2-4-4-cloud-order',
            'admin/2-4-5-device-management',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📗 Developer Manual',
      link: {
        type: 'doc',
        id: 'developer/index',
      },
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'developer/intro',
          label: '1. Introduction',
        },
        {
          type: 'category',
          label: '2. Product Development',
          collapsed: true,
          items: [
            'developer/2-1-intro',
            'developer/2-2-1-firmware-management',
            'developer/2-2-2-product-display',
            'developer/2-2-3-functional-grouping',
          ],
        },
        {
          type: 'doc',
          id: 'developer/appendix',
          label: 'Appendix',
        },
      ],
    },
  ],
};

export default sidebars;
