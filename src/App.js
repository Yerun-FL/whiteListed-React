import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CardSection from "./Components/CardSection";
import WhitelistedComp from "./Components/WhiteListed";
import AnalyticsSection from "./Components/AnalyticsSection";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CardSection />} />
        <Route path="/whitelisted" element={<WhitelistedComp />} />
        <Route path="/analyticsSection" element={<AnalyticsSection />} />
      </Routes>
    </div>
  );
}

export default App;
