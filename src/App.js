import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
