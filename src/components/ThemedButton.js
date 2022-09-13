import React, {useContext} from "react";
import { ThemeContext } from "../context/theme";

function ThemedButton() {
  const {theme} = useContext(ThemeContext)
  return <button className={theme} />;
}

export default ThemedButton;
