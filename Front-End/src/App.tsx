import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Screens/home";
import { Login } from "./Components/desktop/login/Login";
import { Registro } from "./Components/desktop/registro/registro";
import { UserConfings } from "./Screens/User_setting_mobile";
import { Transferir } from "./Screens/Transferir";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<UserConfings />} />
        <Route path="/transferencia" element={<Transferir />} />
      </Routes>
    </Router>
  );
};

export default App;
