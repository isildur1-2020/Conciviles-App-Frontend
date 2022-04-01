import Swal from "sweetalert2";
import useSWR from "swr";
import { useContext } from "react";
import { axiosInstance } from "../../axios/instance";
import { Page } from "./page";
import { dev } from "../../config";
import { useEffect, useState } from "react";
import { UIContext } from "../../contexts/UIContext";

const fetcher = (url) =>
  axiosInstance({
    method: "GET",
    url,
  }).then((resp) => resp?.data?.data);

export const Assistance = () => {
  const URL = `${dev}/info`;
  const [loading, setLoading] = useState(false);
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

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (ev) => {
    try {
      setLoading(true);
      ev.preventDefault();
      const { mainForm } = state;
      const body = {
        ...mainForm,
        ...info,
      };
      const resp = await axiosInstance({
        method: "POST",
        url: dev,
        data: body,
      });
      Swal.fire({
        icon: "success",
        title: "Guardado",
        text: "El registro se ha guardo exitosamente.",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Algo salioó mal",
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
      loading={loading}
      setInfo={setInfo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
