// project import
import MainRoutes from 'routes';
// import {Routes, Route} from 'react-router-dom';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
     {/* <Routes>
      <Route path="/" element={<MainRoutes/>}></Route>
     </Routes> */}
     <MainRoutes/>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
