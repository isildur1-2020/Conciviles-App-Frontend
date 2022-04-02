import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UIContext } from "./contexts/UIContext";
import { Assistance } from "./pages/Assistance/index";
import { Login } from "./pages/Login/index";
import { NotFound } from "./pages/NotFound/index";

export const App = () => {
  const [state, setState] = useState({
    showDrawer: false,
    isAuth: false,
    employeesInfo: [],
    mainForm: {},
    supervisor: "",
  });

  useEffect(() => {
    const isAuth = window.localStorage.getItem("token");
    if (isAuth)
      setState({
        ...state,
        isAuth: true,
      });
  }, []);

  return (
    <UIContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/assistance" element={<Assistance />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UIContext.Provider>
  );
};
