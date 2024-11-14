import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/foodItems").then((response) => {
      setFoodItems(response.data);
    });
  }, []);

  return (
    <DataContext.Provider value={{ foodItems }}>
      {children}
    </DataContext.Provider>
  );
};
