import { Page } from "./page";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export const Drawer = () => {
  const navigate = useNavigate();
  const [handleLogout] = useLogout();
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  const { showDrawer } = state;
  const handleClose = () =>
    setState({
      ...state,
      showDrawer: false,
    });
  const handleNavigate = (updateItem) => {
    setState({
      ...state,
      updateItem,
      showDrawer: false,
    });
  };
  return (
    <Page
      navigate={navigate}
      showDrawer={showDrawer}
      handleClose={handleClose}
      handleLogout={handleLogout}
      handleNavigate={handleNavigate}
    />
  );
};
