import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "./page";

export const Login = () => {
  const navigate = useNavigate();
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
  return (
    <Page
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
