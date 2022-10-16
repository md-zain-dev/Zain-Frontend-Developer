import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { SHIPS_API_URL } from "../api/ApiConstants";
import ReactLoading from "react-loading";

// ----------------------------------------------------------------------

const ShipsContext = createContext(null);

function ShipsProvider({ children }) {
  const [shipData, setShipData] = useState({
    data: [],
    totalCount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getAllShips = async (limit, offset = 0) => {
    setIsLoading(true);
    const response = await axios.get(SHIPS_API_URL, {
      params: {
        ...(limit ? { limit } : {}),
        offset,
      },
    });

    const { status, data } = response;

    if (status === 200) {
      setShipData({
        data: data,
        totalCount: data.length,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllShips(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center top-0 left-0 right-0 bottom-0 fixed">
        <ReactLoading type="spinningBubbles" color="blue" />
      </div>
    );
  }

  return (
    <ShipsContext.Provider value={shipData}>{children}</ShipsContext.Provider>
  );
}

export { ShipsProvider, ShipsContext };
