import useSWR from "swr";
import { Page } from "./page";
import { dev } from "../../config";
import { useState, useContext, useEffect } from "react";
import { UIContext } from "../../contexts/UIContext";
import { axiosInstance } from "../../axios/instance";
import { token } from "../../utilities/token";

const adapter = (data) =>
  data.reduce((prev, curr) => {
    const { label: id, info } = curr;
    const { apellidos_y_nombre } = info;
    const label = `${id} - ${apellidos_y_nombre.text}`;
    return [...prev, { label, info }];
  }, []);

const fetcher = (url) =>
  axiosInstance({
    method: "GET",
    url,
    headers: {
      Authorization: token(),
    },
  }).then((resp) => adapter(resp?.data?.data));

export const EmployeeInfo = () => {
  const URL = `${dev}/employees`;
  const { data, error } = useSWR(URL, fetcher);
  const { state, setState } = useContext(UIContext);
  const [chargeItems, setChargeItems] = useState({});
  const { employeeInfo } = state;
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    charge: "",
    class: "",
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setEmployee({
      ...state,
      [name]: value,
    });
  };

  const handleChangeEmployee = (ev, value) => {
    if (!value)
      return setEmployee({
        id: "",
        name: "",
        charge: "",
        class: "",
      });
    const { label, info } = value;
    const formatData = {
      name: info?.["apellidos_y_nombre"]?.value ?? "",
      charge: info?.["cargo6"]?.value?.ids?.[0] ?? "",
      class: info?.["clase"]?.value?.index ?? "",
    };
    setEmployee({
      id: label,
      ...formatData,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      mainForm: employee,
    });
  }, [employee]);

  useEffect(() => {
    const newCharge = employeeInfo?.cargo?.reduce(
      (prev, { id, name }) => ({
        ...prev,
        [id]: name,
      }),
      {}
    );
    setChargeItems(newCharge);
  }, [employeeInfo]);

  return (
    <Page
      data={data ?? []}
      employee={employee}
      chargeItems={chargeItems}
      employeeInfo={employeeInfo}
      handleInputChange={handleInputChange}
      handleChangeEmployee={handleChangeEmployee}
    />
  );
};
