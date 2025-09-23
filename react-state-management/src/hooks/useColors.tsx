import { useContext } from "react";

import ColorContext from "../contexts/ColorContext";

const useColors = () => useContext(ColorContext);

export default useColors;
