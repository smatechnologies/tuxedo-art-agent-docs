module.exports = {
  mySidebar: [
    'index',
    {
      type: 'category', 
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/introduction',
        'installation/new-installation',
        'installation/upgrade-installation',
      ], 
    },
    {
      type: 'category', 
      label: 'Administration',
      collapsed: false,
      items: [
        'administration/configuration-file',
        'administration/agent-commands',
      ], 
    },
    {
      type: 'category', 
      label: 'Advanced features',
      collapsed: false,
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
      collapsed: false,
      items: [
        'reference/job-return-codes',
        'reference/startup-messages',
        'reference/msgin-messages',
        'reference/processing-messages',
      ], 
    },
  ],
};
