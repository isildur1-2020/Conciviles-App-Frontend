import axios from "axios";
import { dev } from "../config";

export const axiosInstance = axios.create({
  baseURL: dev,
  headers: {
    "Content-Type": "application/json",
  },
});
