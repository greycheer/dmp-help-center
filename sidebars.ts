import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 修复说明：
 * Docusaurus 自动生成的锚点ID格式：
 * - 标题 "1.1 Purpose" 生成 "11-purpose-of-the-manual"（去除点号）
 * - 标题 "2.0 How to Access" 生成 "20-how-to-access-to-the-platform"
 * 所有锚点ID都移除了点号之间的分隔符
 */

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
              label: '2.0 How to Access',
              href: '/dmp-help-center/docs/admin/#20-how-to-access-to-the-platform',
            },
            {
              type: 'link',
              label: '2.1 Platform Account and Role Management',
              href: '/dmp-help-center/docs/admin/#21-platform-account-and-role-management',
            },
            {
              type: 'link',
              label: '2.1.1 Section Overview',
              href: '/dmp-help-center/docs/admin/#211-section-overview',
            },
            {
              type: 'link',
              label: '2.1.2 Account Information Collection',
              href: '/dmp-help-center/docs/admin/#212-account-information-collection',
            },
            {
              type: 'link',
              label: '2.1.3 Create a New Account',
              href: '/dmp-help-center/docs/admin/#213-create-a-new-account',
            },
            {
              type: 'link',
              label: '2.1.4 Managing Role Permissions',
              href: '/dmp-help-center/docs/admin/#214-managing-role-permissions',
            },
            {
              type: 'link',
              label: '2.2 Product Development Management',
              href: '/dmp-help-center/docs/admin/#22-product-development-management',
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
              label: '2.2.5 Firmware Upgrade',
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
              label: '3.1.1 Section Overview',
              href: '/dmp-help-center/docs/admin/#2311-section-overview',
            },
            {
              type: 'link',
              label: '3.1.2 Operation Manual',
              href: '/dmp-help-center/docs/admin/#2312-operation-manual',
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
              label: '3.3.1 Agreement Configuration',
              href: '/dmp-help-center/docs/admin/#2331-agreement-configuration',
            },
            {
              type: 'link',
              label: '3.3.2 Push Certificate Configuration',
              href: '/dmp-help-center/docs/admin/#2332-push-certificate-configuration',
            },
            {
              type: 'link',
              label: '3.4 Network Provisioning',
              href: '/dmp-help-center/docs/admin/#234-network-provisioning-and-front-end-category-management',
            },
            {
              type: 'link',
              label: '3.5 Cloud Storage Plans',
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
              label: '4.1.1 Section Overview',
              href: '/dmp-help-center/docs/admin/#2411-section-overview',
            },
            {
              type: 'link',
              label: '4.1.2 Operation Manual',
              href: '/dmp-help-center/docs/admin/#2412-operation-manual',
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
              label: '4.4.1 Order/Service Cancellation',
              href: '/dmp-help-center/docs/admin/#2441-orderservice-cancellation',
            },
            {
              type: 'link',
              label: '4.5 Device Management',
              href: '/dmp-help-center/docs/admin/#245-device-management',
            },
            {
              type: 'link',
              label: '4.5.1 Unbind Device',
              href: '/dmp-help-center/docs/admin/#2451-unbind-device',
            },
          ],
        },
        {
          type: 'link',
          label: 'Appendix: History',
          href: '/dmp-help-center/docs/admin/#31-history',
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
              href: '/dmp-help-center/docs/developer/#21-product-development',
            },
            {
              type: 'link',
              label: '2.2.1 Product Firmware Management',
              href: '/dmp-help-center/docs/developer/#221-product-firmware-management',
            },
            {
              type: 'link',
              label: '2.2 Device Interaction',
              href: '/dmp-help-center/docs/developer/#22-device-interaction',
            },
            {
              type: 'link',
              label: '2.2.1 Product Display',
              href: '/dmp-help-center/docs/developer/#221-product-display',
            },
            {
              type: 'link',
              label: '2.2.2 Functional Grouping',
              href: '/dmp-help-center/docs/developer/#222-functional-grouping',
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
              label: '3.1 Firmware Repository',
              href: '/dmp-help-center/docs/developer/#23-firmware-management',
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
              href: '/dmp-help-center/docs/developer/#31-faq',
            },
            {
              type: 'link',
              label: '4.2 History',
              href: '/dmp-help-center/docs/developer/#32-history',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
