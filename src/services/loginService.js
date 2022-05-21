import { URI } from "../utilities/URI";
import { axiosInstance } from "../axios/instance";

export const loginService = (data = {}) => {
  return axiosInstance({
    url: URI.login,
    method: "POST",
    data,
  });
};
