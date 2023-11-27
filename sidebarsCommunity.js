module.exports = {
  community: [
    'support',
    'about',
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'doc',
        id: 'contributing/contributing',
      },
      collapsed: false,
      items: [
        'contributing/issues',
        'contributing/development',
        'contributing/pull-request',
        {
          type: 'category',
          label: 'Plugins',
          link: {
            type: 'doc',
            id: 'contributing/plugins',
          },
          collapsed: true,
          items: [
            'contributing/plugins/plugin-config',
            'contributing/plugins/plugin-for-ui',
            'contributing/plugins/plugin-translation',
          ],
        },
        'contributing/translation',
        'contributing/how-to-release',
      ],
    },
    {
      type: 'link',
      href: 'https://github.com/apache/incubator-answer/issues',
      label: 'Feature Request',
    },
    {
      type: 'link',
      href: 'https://github.com/orgs/apache/projects/301',
      label: 'Roadmap',
    },
  ],
};
