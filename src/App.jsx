import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Branch from './pages/Branch';

const App = () => {
  return (
    <HashRouter>
      <Header />
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
          path='/services'
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
        <Route
          path='/branch'
          element={<Branch />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
