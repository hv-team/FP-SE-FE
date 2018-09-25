export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Store Analytics',
    },
    {
      name: 'One Day Statistics',
      url: '/store-analytics/one-day',
      icon: 'icon-graph',
    },
    {
      name: 'Date Range Statistics',
      url: '/store-analytics/date-range',
      icon: 'icon-graph',
    },
    {
      title: true,
      name: 'Settings',
    },
    {
      name: 'Devices',
      url: '/devices',
      icon: 'icon-camrecorder',
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
    }
  ],
};
