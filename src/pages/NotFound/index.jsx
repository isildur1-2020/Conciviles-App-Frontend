import { useNavigate } from "react-router-dom";
import { Page } from "./page";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleRedirect = () => navigate("/login");
  return <Page handleRedirect={handleRedirect} />;
};
