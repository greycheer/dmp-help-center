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
          label: '1. Introduction',
          href: '/dmp-help-center/docs/admin/#introduction',
        },
        {
          type: 'category',
          label: '2. Product Development',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '2.1 Platform Account and Role Management',
              href: '/dmp-help-center/docs/admin/#21-platform-account-and-role-management',
            },
            {
              type: 'link',
              label: '2.2.1 Category Creation and Management',
              href: '/dmp-help-center/docs/admin/#221-category-creation-and-management',
            },
            {
              type: 'link',
              label: '2.2.2 Standard Function Management',
              href: '/dmp-help-center/docs/admin/#222-standard-function-management',
            },
            {
              type: 'link',
              label: '2.2.3 Hardware Product Development',
              href: '/dmp-help-center/docs/admin/#223-hardware-product-development',
            },
            {
              type: 'link',
              label: '2.2.4 Five-Tuple Generation',
              href: '/dmp-help-center/docs/admin/#224-five-tuple-generation',
            },
            {
              type: 'link',
              label: '2.2.5 Hardware Product Firmware Upgrade',
              href: '/dmp-help-center/docs/admin/#225-hardware-product-firmware-upgrade',
            },
          ],
        },
        {
          type: 'category',
          label: '3. APP Management',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '3.1 Create APP',
              href: '/dmp-help-center/docs/admin/#231-create-app',
            },
            {
              type: 'link',
              label: '3.2 APP Configuration',
              href: '/dmp-help-center/docs/admin/#232-app-configuration',
            },
            {
              type: 'link',
              label: '3.3 APP List Configuration',
              href: '/dmp-help-center/docs/admin/#233-app-list-configuration',
            },
            {
              type: 'link',
              label: '3.4 Agreement Configuration',
              href: '/dmp-help-center/docs/admin/#2331-agreement-configuration',
            },
            {
              type: 'link',
              label: '3.5 Push Certificate Configuration',
              href: '/dmp-help-center/docs/admin/#2332-push-certificate-configuration',
            },
            {
              type: 'link',
              label: '3.6 Network Provisioning and Front-End Category',
              href: '/dmp-help-center/docs/admin/#234-network-provisioning-and-front-end-category-management',
            },
            {
              type: 'link',
              label: '3.7 Cloud Storage Plan Configuration',
              href: '/dmp-help-center/docs/admin/#235-cloud-storage-plan-configuration',
            },
          ],
        },
        {
          type: 'category',
          label: '4. Customer Relationship Management',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '4.1 Knowledge Base Configuration',
              href: '/dmp-help-center/docs/admin/#241-knowledge-base-configuration',
            },
            {
              type: 'link',
              label: '4.2 After-sales Management',
              href: '/dmp-help-center/docs/admin/#242-after-sales-management',
            },
            {
              type: 'link',
              label: '4.3 Push Management',
              href: '/dmp-help-center/docs/admin/#243-push-management',
            },
            {
              type: 'link',
              label: '4.4 Cloud Storage Order Management',
              href: '/dmp-help-center/docs/admin/#244-cloud-storage-order-management',
            },
            {
              type: 'link',
              label: '4.5 Device Management',
              href: '/dmp-help-center/docs/admin/#245-device-management',
            },
          ],
        },
        {
          type: 'link',
          label: 'Appendix: History',
          href: '/dmp-help-center/docs/admin/#appendix',
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
          label: '1. Introduction',
          href: '/dmp-help-center/docs/developer/#introduction',
        },
        {
          type: 'category',
          label: '2. Product Development',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '2.1 Product Development',
              href: '/dmp-help-center/docs/developer/#2-product-development',
            },
            {
              type: 'link',
              label: '2.2 Product Firmware Management',
              href: '/dmp-help-center/docs/developer/#21-product-firmware-management',
            },
            {
              type: 'link',
              label: '2.3 Device Interaction',
              href: '/dmp-help-center/docs/developer/#22-device-interaction',
            },
            {
              type: 'link',
              label: '2.4 Product Display',
              href: '/dmp-help-center/docs/developer/#23-product-display',
            },
            {
              type: 'link',
              label: '2.5 Functional Grouping',
              href: '/dmp-help-center/docs/developer/#24-functional-grouping',
            },
          ],
        },
        {
          type: 'category',
          label: '3. Firmware Management',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '3.1 Firmware Repository Management',
              href: '/dmp-help-center/docs/developer/#3-firmware-management',
            },
            {
              type: 'link',
              label: '3.2 Firmware Versions',
              href: '/dmp-help-center/docs/developer/#31-firmware-repository-management',
            },
            {
              type: 'link',
              label: '3.3 OTA Upgrade Tasks',
              href: '/dmp-help-center/docs/developer/#32-ota-upgrade-tasks',
            },
          ],
        },
        {
          type: 'category',
          label: '4. Appendix',
          collapsed: true,
          items: [
            {
              type: 'link',
              label: '4.1 FAQ',
              href: '/dmp-help-center/docs/developer/#appendix-faq',
            },
            {
              type: 'link',
              label: '4.2 History',
              href: '/dmp-help-center/docs/developer/#appendix-history',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
