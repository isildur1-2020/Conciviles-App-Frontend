import { axiosInstance } from "../../axios/instance";
import { useState, useEffect } from "react";
import { BackURI } from "../../config";
import { Page } from "./page";
import { token } from "../../utilities/token";

export const AssistanceActions = () => {
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
  const getAssistanceXLSX = () => {
    const downloadPath = `${BackURI}/downloadAssistance`;
    window.location = downloadPath;
  };

  useEffect(() => {
    getAssitanceBoardInfo();
  }, []);

  return <Page info={info} getAssistanceXLSX={getAssistanceXLSX} />;
};
