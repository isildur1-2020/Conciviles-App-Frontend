import { Page } from "./page";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { useLogout } from "../../hooks/useLogout";

export const Drawer = () => {
  const [handleLogout] = useLogout();
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  const { showDrawer } = state;
  const handleClose = () =>
    setState({
      ...state,
      showDrawer: false,
    });
  return (
    <Page
      showDrawer={showDrawer}
      handleClose={handleClose}
      handleLogout={handleLogout}
    />
  );
};
