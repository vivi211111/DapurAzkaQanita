import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Galeri from "./pages/Galeri";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Product";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
