import Swal from "sweetalert2";
import useSWR from "swr";
import { useEffect, useState, useContext } from "react";
import { axiosInstance } from "../../axios/instance";
import { Page } from "./page";
import { dev } from "../../config";
import { UIContext } from "../../contexts/UIContext";
import { token, supervisor } from "../../utilities/token";
import moment from "moment";

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
    date: moment(),
    turn: "",
    input: moment(),
    output: moment(),
    novelity: "",
    observations: "",
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
        supervisor: supervisor(),
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
      const { err, message } = data;
      if (err) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
      }
      Swal.fire({
        icon: "success",
        title: "Completado",
        text: message,
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    } finally {
      setLoading(false);
      setInfo({
        location: "",
        date: new Date(),
        turn: "",
        input: new Date(),
        output: new Date(),
        novelity: "",
        observations: "",
      });
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
