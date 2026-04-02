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
          type: 'doc',
          id: 'admin/index',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Platform Access',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Account & Role Management',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Category Management',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Standard Function Management',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Hardware Product Development',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Five-Tuple Generation',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Firmware Upgrade',
            },
          ],
        },
        {
          type: 'category',
          label: 'APP Management',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Create APP',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'APP Configuration',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'APP List Configuration',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Agreement Configuration',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Push Certificate Configuration',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Provisioning & Category',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Cloud Storage Plan',
            },
          ],
        },
        {
          type: 'category',
          label: 'Customer Relationship',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Knowledge Base',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'After-sales Management',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Push Management',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Cloud Storage Orders',
            },
            {
              type: 'doc',
              id: 'admin/index',
              label: 'Device Management',
            },
          ],
        },
        {
          type: 'doc',
          id: 'admin/index',
          label: 'Appendix: History',
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
          id: 'developer/index',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Product Development',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Product Firmware Management',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Device Interaction',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Product Display',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Functional Grouping',
            },
          ],
        },
        {
          type: 'category',
          label: 'Firmware Management',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Firmware Repository',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'Firmware Versions',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'OTA Upgrade Tasks',
            },
          ],
        },
        {
          type: 'category',
          label: 'Appendix',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'developer/index',
              label: 'FAQ',
            },
            {
              type: 'doc',
              id: 'developer/index',
              label: 'History',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
