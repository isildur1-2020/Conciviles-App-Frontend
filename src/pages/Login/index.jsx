import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../contexts/UIContext";
import { Page } from "./page";

export const Login = () => {
  const navigate = useNavigate();
  const UIState = useContext(UIContext);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate("/assistance");
  };
  useEffect(() => {
    if (UIState?.state?.isAuth) navigate("/assistance");
  }, [UIState?.state?.isAuth]);
  return (
    <Page
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
