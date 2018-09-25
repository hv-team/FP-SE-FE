import React from 'react';
import Loadable from 'react-loadable'

// import DefaultLayout from './containers/DefaultLayout';
// import OneDayStatistics from './views/StoreAnalytics/OneDayStatistics/OneDayStatistics';
// import DateRangeStatistics from './views/StoreAnalytics/DateRangeStatistics/DateRangeStatistics';
// import Dashboard from './views/Dashboard/Dashboard';


function Loading() {
  return <div>Loading...</div>;
}

const OneDayStatistics = Loadable({
  loader: () => import('./views/StoreAnalytics/OneDayStatistics/OneDayStatistics'),
  loading: Loading,
});

const DateRangeStatistics = Loadable({
  loader: () => import('./views/StoreAnalytics/DateRangeStatistics/DateRangeStatistics'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Devices = Loadable({
  loader: () => import('./views/Settings/Devices/Devices'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Settings/Users/Users'),
  loading: Loading,
});

const routes = [
  { path: `/dashboard`, name: 'Dashboard', component: Dashboard },
  { path: `/store-analytics/one-day`, name: 'One Day Statistics', component: OneDayStatistics },
  { path: `/store-analytics/date-range`, name: 'Date Range Statistics', component: DateRangeStatistics },
  { path: `/devices`, name: 'Devices', component: Devices },
  { path: `/users`, name: 'Users', component: Users },
];

export default routes;
