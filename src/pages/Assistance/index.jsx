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
      ev.preventDefault();
      const { mainForm } = state;
      const body = {
        ...mainForm,
        ...info,
      };
      const resp = await axiosInstance({
        method: "GET",
        url: dev,
        body,
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <Page
      data={data}
      info={info}
      setInfo={setInfo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
