import useSWR from "swr";
import { axiosInstance } from "../../axios/instance";
import { useEffect, useState } from "react";
import { BackURI } from "../../config";
import { Page } from "./page";
import { token } from "../../utilities/token";
import Swal from "sweetalert2";
import { swalConfirm } from "../../modals/swal/confirm";

const fetcher = (url) =>
  axiosInstance({
    url,
    headers: {
      Authorization: token(),
    },
  }).then((resp) => resp?.data?.board);

export const AssistanceActions = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR("/assistance/info", fetcher, {
    refreshInterval: 5000,
  });
  const [info, setInfo] = useState({
    id: "",
    name: "",
  });

  const closeAssistance = async () => {
    try {
      setDisabled(true);
      setLoading(true);
      const { isConfirmed } = await swalConfirm({
        text: "Se archivará la tabla actual. Los datos se almacenarán en un nuevo documento, deseas continuar?",
      });
      if (!isConfirmed) return;
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
      setLoading(false);
    }
  };

  const getAssistanceXLSX = () => {
    const downloadPath = `${BackURI}/downloadAssistance`;
    window.location = downloadPath;
  };

  useEffect(() => {
    setInfo(data);
  }, [data]);

  return (
    <Page
      info={info}
      loading={loading}
      disabled={disabled}
      closeAssistance={closeAssistance}
      getAssistanceXLSX={getAssistanceXLSX}
    />
  );
};
