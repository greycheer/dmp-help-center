// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Admin Manual',
      link: {
        type: 'doc',
        id: 'admin/index',
      },
      items: [
        {
          type: 'doc',
          id: 'admin/index',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Manual',
      link: {
        type: 'doc',
        id: 'developer/index',
      },
      items: [
        {
          type: 'doc',
          id: 'developer/index',
          label: 'Overview',
        },
      ],
    },
  ],
};

export default sidebars;
