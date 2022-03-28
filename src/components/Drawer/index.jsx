import { Page } from "./page";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";

export const Drawer = () => {
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  const { showDrawer } = state;
  const handleClose = () =>
    setState({
      ...state,
      showDrawer: false,
    });
  return <Page showDrawer={showDrawer} handleClose={handleClose} />;
};
