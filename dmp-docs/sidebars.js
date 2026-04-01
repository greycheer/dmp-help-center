// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📊 Platform Admin',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'Platform administration and management guide',
      },
      items: [
        {
          type: 'category',
          label: 'Quick Start',
          items: [
            'admin/quick-start/platform-overview',
            'admin/quick-start/account-setup',
            'admin/quick-start/create-project',
          ],
        },
        {
          type: 'category',
          label: 'Device Management',
          items: [
            'admin/device-mgmt/device-registration',
            'admin/device-mgmt/batch-import',
            'admin/device-mgmt/ota-upgrades',
          ],
        },
        {
          type: 'category',
          label: 'User & Permissions',
          items: [
            'admin/user-permissions/account-role-mgmt',
          ],
        },
        {
          type: 'category',
          label: 'Product & Services',
          items: [
            'admin/services/category-mgmt',
            'admin/services/standard-functions',
            'admin/services/five-tuple-generation',
            'admin/services/app-management',
            'admin/services/agreement-push-config',
            'admin/services/network-provisioning',
            'admin/services/cloud-storage',
          ],
        },
        {
          type: 'category',
          label: 'Support & Troubleshooting',
          items: [
            'admin/troubleshooting/knowledge-base',
            'admin/troubleshooting/order-management',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💻 Developer Guide',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'Developer integration and API documentation',
      },
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'developer/getting-started/introduction',
            'developer/getting-started/terminology',
            'developer/getting-started/quick-access',
          ],
        },
        {
          type: 'category',
          label: 'Product Development',
          items: [
            'developer/product-dev/product-creation',
            'developer/product-dev/firmware-mgmt',
            'developer/product-dev/thing-model',
            'developer/product-dev/device-interaction',
          ],
        },
        {
          type: 'category',
          label: 'Firmware Management',
          items: [
            'developer/firmware-repo-mgmt',
          ],
        },
        {
          type: 'category',
          label: 'Device Integration',
          items: [
            'developer/device-integration/tuple-auth',
            'developer/device-integration/network-provisioning',
            'developer/device-integration/device-binding',
          ],
        },
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'developer/api/overview',
            'developer/api/authentication',
            'developer/api/device-apis',
            'developer/api/user-apis',
          ],
        },
        {
          type: 'category',
          label: 'OTA & Updates',
          items: [
            'developer/ota/ota-overview',
            'developer/ota/ota-types',
            'developer/ota/implementation',
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            'developer/faq',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
