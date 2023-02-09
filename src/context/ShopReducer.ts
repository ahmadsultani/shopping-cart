import { IProduct } from "../data/ShopData";

export interface IShopState {
  products: IProduct[];
  cart: IProduct[];
  sort: string | undefined;
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  searchQuery: string;
}

export interface IShopAction {
  type: string;
  payload?: IProduct | string | number | boolean;
}

const ShopReducer = (state: IShopState, action: IShopAction): IShopState => {
  const { cart } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...cart, payload as IProduct],
      };
    case "REMOVE_FROM_CART": {
      const { id } = payload as IProduct;
      return {
        ...state,
        cart: [...cart.filter((item) => item.id !== id)],
      };
    }
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: payload as string,
      };
    case "FILTER_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: payload as number,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        sort: undefined,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error("Action type doesn't exist");
  }
};

export default ShopReducer;
