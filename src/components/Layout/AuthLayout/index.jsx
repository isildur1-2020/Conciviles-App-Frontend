import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UIContext } from "../../../contexts/UIContext";
import { Page } from "./page";

export const AuthLayout = ({ children }) => {
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  useEffect(() => {
    setState({
      ...state,
      showDrawer: false,
    });
  }, []);
  return state.isAuth ? (
    <Page children={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};
