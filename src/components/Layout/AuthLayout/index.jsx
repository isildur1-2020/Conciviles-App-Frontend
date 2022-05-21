import { Navigate } from "react-router-dom";
import { token } from "../../../utilities/token";
import { Page } from "./page";

export const AuthLayout = ({ children }) => {
  return token() ? (
    <Page children={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};
