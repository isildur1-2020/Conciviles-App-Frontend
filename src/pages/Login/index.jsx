import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../contexts/UIContext";
import { axiosInstance } from "../../axios/instance";
import Swal from "sweetalert2";
import { dev } from "../../config";
import { Page } from "./page";

export const Login = () => {
  const navigate = useNavigate();
  const UIState = useContext(UIContext);
  const [loading, setLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
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
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      setLoading(true);
      const { data } = await axiosInstance({
        url: `${dev}/login`,
        method: "POST",
        data: state,
      });
      console.log(data);
      const { err, message } = data;
      if (err)
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
      const { supervisor, token } = data;
      UIState.setState((prevState) => ({
        ...prevState,
        isAuth: true,
        supervisor,
      }));
      window.localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (UIState?.state?.isAuth) navigate("/assistance");
  }, [UIState?.state?.isAuth]);
  useEffect(() => {
    const { username, password } = state;
    if (username === "" || password === "") setDisabledSubmit(true);
    else setDisabledSubmit(false);
  }, [state]);
  return (
    <Page
      state={state}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      disabledSubmit={disabledSubmit}
    />
  );
};
