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
        {
          type: 'doc',
          id: 'admin/3-1-history',
          label: '3.1 History',
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
          type: 'doc',
          id: 'developer/2-1-product-development',
          label: '2.1 Product Development',
        },
        {
          type: 'doc',
          id: 'developer/2-2-device-interaction',
          label: '2.2 Device Interaction',
        },
        {
          type: 'doc',
          id: 'developer/2-2-1-product-display-full',
          label: '2.2.1 Product Display',
        },
        {
          type: 'doc',
          id: 'developer/2-2-2-functional-grouping-full',
          label: '2.2.2 Functional Grouping',
        },
        {
          type: 'doc',
          id: 'developer/2-3-firmware-management',
          label: '2.3 Firmware Management',
        },
        {
          type: 'doc',
          id: 'developer/3-1-faq',
          label: '3.1 FAQ',
        },
        {
          type: 'doc',
          id: 'developer/3-2-history',
          label: '3.2 History',
        },
      ],
    },
  ],
};

export default sidebars;
