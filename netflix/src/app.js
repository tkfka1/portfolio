import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SignIn, Browse, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";


export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/browse" element={<Browse />} />
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
    </Router>
  );
}
