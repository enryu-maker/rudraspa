import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<AboutUs />}
        />
        <Route
          path='/service'
          element={<Services />}
        />
        <Route
          path='/gallery'
          element={<Gallery />}
        />
        <Route
          path='/contact'
          element={<ContactUs />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
