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
          type: 'link',
          label: 'Introduction',
          href: '/dmp-help-center/docs/admin/#introduction',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Platform Account and Role Management',
              href: '/dmp-help-center/docs/admin/#21-platform-account-and-role-management',
            },
            {
              type: 'link',
              label: 'Category Creation and Management',
              href: '/dmp-help-center/docs/admin/#221-category-creation-and-management',
            },
            {
              type: 'link',
              label: 'Standard Function Management',
              href: '/dmp-help-center/docs/admin/#222-standard-function-management',
            },
            {
              type: 'link',
              label: 'Hardware Product Development',
              href: '/dmp-help-center/docs/admin/#223-hardware-product-development',
            },
            {
              type: 'link',
              label: 'Five-Tuple Generation',
              href: '/dmp-help-center/docs/admin/#224-five-tuple-generation',
            },
            {
              type: 'link',
              label: 'Hardware Product Firmware Upgrade',
              href: '/dmp-help-center/docs/admin/#225-hardware-product-firmware-upgrade',
            },
          ],
        },
        {
          type: 'category',
          label: 'APP Management',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Create APP',
              href: '/dmp-help-center/docs/admin/#231-create-app',
            },
            {
              type: 'link',
              label: 'APP Configuration',
              href: '/dmp-help-center/docs/admin/#232-app-configuration',
            },
            {
              type: 'link',
              label: 'APP List Configuration',
              href: '/dmp-help-center/docs/admin/#233-app-list-configuration',
            },
            {
              type: 'link',
              label: 'Agreement Configuration',
              href: '/dmp-help-center/docs/admin/#2331-agreement-configuration',
            },
            {
              type: 'link',
              label: 'Push Certificate Configuration',
              href: '/dmp-help-center/docs/admin/#2332-push-certificate-configuration',
            },
            {
              type: 'link',
              label: 'Provisioning and Category',
              href: '/dmp-help-center/docs/admin/#234-network-provisioning-and-front-end-category-management',
            },
            {
              type: 'link',
              label: 'Cloud Storage Plan',
              href: '/dmp-help-center/docs/admin/#235-cloud-storage-plan-management',
            },
          ],
        },
        {
          type: 'category',
          label: 'Customer Relationship',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Knowledge Base',
              href: '/dmp-help-center/docs/admin/#241-knowledge-base-management',
            },
            {
              type: 'link',
              label: 'After-sales Management',
              href: '/dmp-help-center/docs/admin/#242-after-sales-management',
            },
            {
              type: 'link',
              label: 'Push Management',
              href: '/dmp-help-center/docs/admin/#243-push-management',
            },
            {
              type: 'link',
              label: 'Cloud Storage Orders',
              href: '/dmp-help-center/docs/admin/#244-cloud-storage-order-management',
            },
            {
              type: 'link',
              label: 'Device Management',
              href: '/dmp-help-center/docs/admin/#245-device-management',
            },
          ],
        },
        {
          type: 'link',
          label: 'Appendix: History',
          href: '/dmp-help-center/docs/admin/#appendix-history',
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
          type: 'link',
          label: 'Introduction',
          href: '/dmp-help-center/docs/developer/#introduction',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Product Development',
              href: '/dmp-help-center/docs/developer/#2-product-development',
            },
            {
              type: 'link',
              label: 'Product Firmware Management',
              href: '/dmp-help-center/docs/developer/#21-product-firmware-management',
            },
            {
              type: 'link',
              label: 'Device Interaction',
              href: '/dmp-help-center/docs/developer/#22-device-interaction',
            },
            {
              type: 'link',
              label: 'Product Display',
              href: '/dmp-help-center/docs/developer/#23-product-display',
            },
            {
              type: 'link',
              label: 'Functional Grouping',
              href: '/dmp-help-center/docs/developer/#24-functional-grouping',
            },
          ],
        },
        {
          type: 'category',
          label: 'Firmware Management',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'Firmware Repository',
              href: '/dmp-help-center/docs/developer/#3-firmware-management',
            },
            {
              type: 'link',
              label: 'Firmware Versions',
              href: '/dmp-help-center/docs/developer/#31-firmware-repository-management',
            },
            {
              type: 'link',
              label: 'OTA Upgrade Tasks',
              href: '/dmp-help-center/docs/developer/#32-ota-upgrade-tasks',
            },
          ],
        },
        {
          type: 'category',
          label: 'Appendix',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: 'FAQ',
              href: '/dmp-help-center/docs/developer/#appendix-faq',
            },
            {
              type: 'link',
              label: 'History',
              href: '/dmp-help-center/docs/developer/#appendix-history',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
