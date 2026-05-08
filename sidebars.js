module.exports = {
  mySidebar: [
    'overview',
    'release-notes',
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'installation/installation-overview',
      },
      items: [
        'installation/introduction',
        'installation/new-installation',
        'installation/upgrade-installation',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'administration/administration-overview',
      },
      items: [
        'administration/configuration-file',
        'administration/agent-commands',
      ],
    },
    {
      type: 'category',
      label: 'Advanced features',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'advanced-features/advanced-features-overview',
      },
      items: [
        'advanced-features/executing-jobs',
        'advanced-features/step-feedback',
        'advanced-features/utilities',
        'advanced-features/logging',
        'advanced-features/msgin',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reference/reference-overview',
      },
      items: [
        'reference/job-return-codes',
        'reference/startup-messages',
        'reference/msgin-messages',
        'reference/processing-messages',
      ],
    },
  ],
};
