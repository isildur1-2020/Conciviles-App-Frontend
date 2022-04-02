import Swal from "sweetalert2";
import useSWR from "swr";
import { useEffect, useState, useContext } from "react";
import { axiosInstance } from "../../axios/instance";
import { Page } from "./page";
import { dev } from "../../config";
import { UIContext } from "../../contexts/UIContext";
import { token } from "../../utilities/token";

const fetcher = (url) =>
  axiosInstance({
    method: "GET",
    url,
    headers: {
      Authorization: token(),
    },
  }).then((resp) => resp?.data?.data);

export const Assistance = () => {
  const URL = `${dev}/info`;
  const [loading, setLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { data, error } = useSWR(URL, fetcher);
  const { state, setState } = useContext(UIContext);
  const [info, setInfo] = useState({
    location: "",
    date: new Date(),
    turn: "",
    input: new Date(),
    output: new Date(),
    novelity: "",
    observations: "Sin observaciones",
  });

  useEffect(() => {
    setState({ ...state, employeeInfo: data });
  }, [data]);

  useEffect(() => {
    if (!state.mainForm.id) setSubmitDisabled(true);
    else setSubmitDisabled(false);
  }, [state.mainForm.id]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (ev) => {
    try {
      setLoading(true);
      ev.preventDefault();
      const { mainForm, updateItem } = state;
      if (mainForm.id === "") return;
      const body = {
        ...mainForm,
        ...info,
        supervisor: window.localStorage.getItem("supervisor"),
        updateItem,
      };
      const { data } = await axiosInstance({
        method: "POST",
        url: dev,
        data: body,
        headers: {
          Authorization: token(),
        },
      });
      const { err } = data;
      if (err) {
        return Swal.fire({
          icon: "error",
          title: "Algo salió mal",
          text: "Verifica los campos",
        });
      }
      Swal.fire({
        icon: "success",
        title: "Guardado",
        text: "El registro se ha guardo exitosamente.",
      });
      setInfo({
        location: "",
        date: new Date(),
        turn: "",
        input: new Date(),
        output: new Date(),
        novelity: "",
        observations: "Sin observaciones",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Algo salió mal",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page
      data={data}
      info={info}
      state={state}
      loading={loading}
      setInfo={setInfo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitDisabled={submitDisabled}
    />
  );
};
