import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar1 from "./components/Navbar1";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./styles/app.css";
import "./styles/navbar1.css";
import "./styles/contact.css";
import "./styles/home.css";
import "./styles/footer.css";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
