import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";

export const useLogout = () => {
  const { state, setState } = useContext(UIContext);

  const logout = () => {
    setState({
      ...state,
      isAuth: false,
    });
    window.localStorage.clear();
  };

  return [logout];
};
