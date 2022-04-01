import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UIContext } from "../../../contexts/UIContext";
import { Page } from "./page";

export const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  useEffect(() => {
    setState({
      ...state,
      showDrawer: false,
    });
  }, []);
  useEffect(() => {
    if (!UIState.state.isAuth) navigate("/login");
  }, [UIState.state.isAuth]);
  return state.isAuth ? (
    <Page children={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};
