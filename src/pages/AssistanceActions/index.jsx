import { axiosInstance } from "../../axios/instance";
import { useState, useEffect } from "react";
import { BackURI } from "../../config";
import { Page } from "./page";
import { token } from "../../utilities/token";
import Swal from "sweetalert2";

export const AssistanceActions = () => {
  const [disabled, setDisabled] = useState(false);
  const [info, setInfo] = useState({
    id: "",
    name: "",
  });
  const getAssitanceBoardInfo = async () => {
    try {
      const resp = await axiosInstance({
        url: "/assistance/info",
        headers: {
          Authorization: token(),
        },
      });
      setInfo(resp.data.board);
    } catch (err) {
      console.log(err);
    }
  };
  const closeAssistance = async () => {
    try {
      setDisabled(true);
      const { data } = await axiosInstance({
        url: "/assistance",
        headers: {
          Authorization: token(),
        },
      });
      const { err, message } = data;
      !err
        ? Swal.fire({
            icon: "success",
            title: "Tabla duplicada",
            text: message,
          })
        : Swal.fire({
            icon: "error",
            title: "Tabla duplicada",
            text: "Ha ocurrido un error al cerrar la asistencia",
          });
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false);
    }
  };

  const getAssistanceXLSX = () => {
    const downloadPath = `${BackURI}/downloadAssistance`;
    window.location = downloadPath;
  };

  useEffect(() => {
    getAssitanceBoardInfo();
  }, [disabled]);

  return (
    <Page
      info={info}
      disabled={disabled}
      closeAssistance={closeAssistance}
      getAssistanceXLSX={getAssistanceXLSX}
    />
  );
};
