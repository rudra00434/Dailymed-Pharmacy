import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Medicines from './pages/Medicines';
import Categories from './pages/Categories';
import HealthWellness from './pages/HealthWellness';
import HealthBlogs from './pages/HealthBlogs';
import Offers from './pages/Offers';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/health-wellness" element={<HealthWellness />} />
            <Route path="/health-blogs" element={<HealthBlogs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
