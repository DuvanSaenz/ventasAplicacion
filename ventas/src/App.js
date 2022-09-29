import React from "react";  
import "@fortawesome/fontawesome-free/js/all";
import "bulma/css/bulma.css";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route exact path ="/Clientes" element={<Clientes />} />
    </Routes>
  </Router>

  );
}

export default App;