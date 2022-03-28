import React, { useState } from "react";
import { AuthLayout } from "./components/Layout/AuthLayout/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UIContext } from "./contexts/UIContext";

export const App = () => {
  const [state, setState] = useState({
    showDrawer: false,
  });

  return (
    <UIContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <AuthLayout>
          <Routes>
            <Route path="/" element={<h1>Esa noche</h1>} />
          </Routes>
        </AuthLayout>
      </BrowserRouter>
    </UIContext.Provider>
  );
};
