import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AddArticle from "./pages/AddArticle";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
            <Route path="/dodaj-artykul" element={<AddArticle />} />
            <Route path="/logowanie" element={<Login />} />
            <Route path="/rejestracja" element={<Register />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
