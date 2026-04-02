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
          type: 'html',
          value: '<a href="/dmp-help-center/docs/admin/#introduction" class="menu__link">Introduction</a>',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#21-platform-account-and-role-management" class="menu__link">Platform Account and Role Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#221-category-creation-and-management" class="menu__link">Category Creation and Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#222-standard-function-management" class="menu__link">Standard Function Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#223-hardware-product-development" class="menu__link">Hardware Product Development</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#224-five-tuple-generation" class="menu__link">Five-Tuple Generation</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#225-hardware-product-firmware-upgrade" class="menu__link">Hardware Product Firmware Upgrade</a>',
            },
          ],
        },
        {
          type: 'category',
          label: 'APP Management',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#231-create-app" class="menu__link">Create APP</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#232-app-configuration" class="menu__link">APP Configuration</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#233-app-list-configuration" class="menu__link">APP List Configuration</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#2331-agreement-configuration" class="menu__link">Agreement Configuration</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#2332-push-certificate-configuration" class="menu__link">Push Certificate Configuration</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#234-network-provisioning-and-front-end-category-management" class="menu__link">Provisioning and Category</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#235-cloud-storage-plan-configuration" class="menu__link">Cloud Storage Plan</a>',
            },
          ],
        },
        {
          type: 'category',
          label: 'Customer Relationship',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#241-knowledge-base-configuration" class="menu__link">Knowledge Base</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#242-after-sales-management" class="menu__link">After-sales Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#243-push-management" class="menu__link">Push Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#244-cloud-storage-order-management" class="menu__link">Cloud Storage Orders</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/admin/#245-device-management" class="menu__link">Device Management</a>',
            },
          ],
        },
        {
          type: 'html',
          value: '<a href="/dmp-help-center/docs/admin/#appendix" class="menu__link">Appendix: History</a>',
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
          type: 'html',
          value: '<a href="/dmp-help-center/docs/developer/#introduction" class="menu__link">Introduction</a>',
        },
        {
          type: 'category',
          label: 'Product Development',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#2-product-development" class="menu__link">Product Development</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#21-product-firmware-management" class="menu__link">Product Firmware Management</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#22-device-interaction" class="menu__link">Device Interaction</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#23-product-display" class="menu__link">Product Display</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#24-functional-grouping" class="menu__link">Functional Grouping</a>',
            },
          ],
        },
        {
          type: 'category',
          label: 'Firmware Management',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#3-firmware-management" class="menu__link">Firmware Repository</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#31-firmware-repository-management" class="menu__link">Firmware Versions</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#32-ota-upgrade-tasks" class="menu__link">OTA Upgrade Tasks</a>',
            },
          ],
        },
        {
          type: 'category',
          label: 'Appendix',
          collapsed: true,
          items: [
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#appendix-faq" class="menu__link">FAQ</a>',
            },
            {
              type: 'html',
              value: '<a href="/dmp-help-center/docs/developer/#appendix-history" class="menu__link">History</a>',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
