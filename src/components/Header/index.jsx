import { Page } from "./page";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";

export const Header = () => {
  const UIState = useContext(UIContext);
  const { state, setState } = UIState;
  const handleShow = () =>
    setState({
      ...state,
      showDrawer: true,
    });
  return <Page handleShow={handleShow} />;
};
