import React from "react";
import Header from "./components/TestNavbar.tsx";
import Homepage from "./pages/homepage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./products.tsx";

function App() {
  return (
    <div>
      <Router >
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path= "/discover-more" element={<Products />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
