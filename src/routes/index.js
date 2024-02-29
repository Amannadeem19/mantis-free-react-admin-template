import { useRoutes } from 'react-router-dom';

// project import
// import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import ClassroomRoutes from './ClassroomRoutes';
import ClassDetailsRoute from './ClassDetailsRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, ClassDetailsRoute]);
}
