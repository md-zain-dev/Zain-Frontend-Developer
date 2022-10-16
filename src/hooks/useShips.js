import { useContext } from "react";
import { ShipsContext } from "../context/ShipsContext";

// ----------------------------------------------------------------------

const useShips = () => useContext(ShipsContext);

export default useShips;
