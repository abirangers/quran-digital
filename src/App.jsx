import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Quran from "./pages/Quran";
import Surah from "./pages/Surah";
import Contact from "./pages/Contact";
function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/quran/:id" element={<Surah />} />
          <Route index element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
