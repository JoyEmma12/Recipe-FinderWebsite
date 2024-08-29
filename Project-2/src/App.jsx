import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OnboardingPage from "./pages/Onboarding/OnboardingPage";
import Signup from "./pages/Signupage/Signup";
import Loginpage from "./pages/Signupage/Loginpage";
import Searchpage from "./pages/Recipesearch/Searchpage";
import RecipeDetailsPage from "./pages/Recipesearch/RecipeDetailsPage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Contactpage from "./pages/Contactpage/Contactpage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/contactpage" element={<Contactpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
