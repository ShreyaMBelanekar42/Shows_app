import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Allshows from "./pages/Allshows";
import ShowDetails from "./pages/ShowDetails";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Allshows />} />
          <Route path="/show/:showId" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
