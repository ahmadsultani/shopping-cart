import { createContext, useContext, useReducer } from "react";
import ShopReducer, { IShopAction } from "./ShopReducer";
import { products, IProduct } from "../data/ShopData";

interface IContextProps {
  children: React.ReactNode;
}

const initialState = {
  products: products as IProduct[],
  cart: [] as IProduct[],
  sort: undefined as string | undefined,
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
};

export const ShopContext = createContext(initialState);
export const ShopDispatchContext = createContext(
  {} as React.Dispatch<IShopAction>
);

const ShopProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(ShopReducer, initialState);
  return (
    <ShopContext.Provider value={state}>
      <ShopDispatchContext.Provider value={dispatch}>
        {children}
      </ShopDispatchContext.Provider>
    </ShopContext.Provider>
  );
};

export const useShopState = () => {
  return useContext(ShopContext);
};

export const useShopDispatch = () => {
  return useContext(ShopDispatchContext);
};

export default ShopProvider;
