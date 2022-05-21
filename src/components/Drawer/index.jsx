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
  const handleInput = (option) => {
    setState({
      ...state,
      updateItem: option,
      showDrawer: false,
    });
    navigate("/assistance");
  };
  const handleDownloadXSLX = () => {
    handleClose();
    navigate("/download-assistance");
  };
  return (
    <Page
      navigate={navigate}
      showDrawer={showDrawer}
      handleClose={handleClose}
      handleInput={handleInput}
      handleLogout={handleLogout}
      handleDownloadXSLX={handleDownloadXSLX}
    />
  );
};
