import { Page } from "./page";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../contexts/UIContext";
import { useLogout } from "../../hooks/useLogout";

export const Header = () => {
  const [handleLogout] = useLogout();
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  const handleShow = () =>
    setState({
      ...state,
      showDrawer: true,
    });
  return <Page handleShow={handleShow} handleLogout={handleLogout} />;
};
