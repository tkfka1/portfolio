import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { Home, SignIn, Browse, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";


export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
