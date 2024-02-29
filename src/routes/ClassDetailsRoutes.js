import { lazy } from 'react';
// 
// project import
import Loadable from 'components/Loadable';
// import MainLayout from 'layout/MainLayout';
const ClassDetails = Loadable(lazy(() => import('pages/classroom/ClassDetails')));

// import ClassDetails from 'pages/classroom/ClassDetails';
// import TemporaryDrawer from 'pages/classroom/Drawer';

// render - dashboard

// ==============================|| MAIN ROUTING ||============================== //

const ClassDetailsRoute = {
  path: 'c',
  element: <ClassDetails />,
  
};

export default ClassDetailsRoute;
