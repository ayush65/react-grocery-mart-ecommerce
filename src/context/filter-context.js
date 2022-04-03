import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import {filterReducer} from '../reducer/filter-reducer'


const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [State, Dispatch] = useReducer(filterReducer, {
    product: [],
    price: 50,
    category: [],
    rating: 5,
    sort: null,
    default: [],
  });
  useEffect(() => {
    (async () => {
      let response = await axios.get("/api/products");
      Dispatch({
        type: "UPDATE_PRODUCTS",
        payload: { products: response.data.products },
      });
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ State, Dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };