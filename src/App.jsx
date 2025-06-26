// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/pages.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage/>} />
           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;