import useSWR from "swr";
import { Page } from "./page";
import { dev } from "../../config";
import { useState, useContext, useEffect } from "react";
import { UIContext } from "../../contexts/UIContext";
import { axiosInstance } from "../../axios/instance";

const fetcher = (url) =>
  axiosInstance({
    method: "GET",
    url,
  }).then((resp) => resp?.data?.data);

export const EmployeeInfo = () => {
  const URL = `${dev}/employees`;
  const { state, setState } = useContext(UIContext);
  const { employeeInfo } = state;

  const { data, error } = useSWR(URL, fetcher);
  const [chargeItems, setChargeItems] = useState({});
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
    const [nameObj, chargeObj, classObj] = info;
    const formatData = {
      name: nameObj?.value ?? "",
      charge: chargeObj?.value?.ids?.[0] ?? "",
      class: classObj?.value?.index ?? "",
    };
    setEmployee({
      id: label,
      ...formatData,
    });
  };

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

  useEffect(() => {
    setState({
      ...state,
      mainForm: employee,
    });
  }, [employee]);

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
