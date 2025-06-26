// src/App.jsx
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css"
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import Header from "./components/Header/Header";
import AdmissionsPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";


function App() {
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            
          </Routes>
          <ChatbotComponent/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

