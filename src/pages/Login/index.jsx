import { Page } from "./page";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../contexts/UIContext";
import { loginService } from "../../services/loginService";
import { swal } from "../../modals/swal/modal";
import { token } from "../../utilities/token";

export const Login = () => {
  const navigate = useNavigate();
  const UIState = useContext(UIContext);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    showPassword: false,
    disabledSubmit: true,
  });
  const handleShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading(true);
      const { data } = await loginService(state);
      const { err, message } = data;
      if (err) return swal("error", message);
      const { credentials, token } = data;
      const { username, supervisor } = credentials;
      const currentUser = !supervisor ? username : supervisor;
      UIState.setState((prevState) => ({
        ...prevState,
        supervisor,
        isAuth: true,
      }));
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("supervisor", currentUser);
      navigate("/assistance");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // CHECK FORM VALUES
  useEffect(() => {
    setState((s) => {
      const { username, password } = s;
      const isEmpty = username === "" || password === "";
      return {
        ...s,
        disabledSubmit: isEmpty,
      };
    });
  }, [state.username, state.password]);
  // CHECK SESSION
  useEffect(() => {
    if (token()) {
      UIState.setState((s) => ({
        ...s,
        isAuth: true,
      }));
      navigate("/assistance");
    }
  }, []);
  return (
    <Page
      state={state}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleShowPassword={handleShowPassword}
    />
  );
};
