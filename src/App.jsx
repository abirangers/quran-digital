import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quran from "./pages/Quran";
import Surah from "./pages/Surah";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/quran/:id" element={<Surah />} />
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
