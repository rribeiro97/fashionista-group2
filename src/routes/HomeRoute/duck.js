const CLEAR = "SIGNUP/CLEAR";
const UPDATE_VALUE = "SIGNUP/UPDATE_VALUE";
const UPDATE_CART = "CART/UPDATE";

export const KEYS = {
  products: "products",
  fetchedProducts: "fetchedProducts",
  filteredProducts: "filteredProducts",
  showCategoryFilter: "showCategoryFilter",
  categories: "categories",
  selectedCategories: "selectedCategories",
  cartItems: "cartItems"
};

export const INITIAL_STATE = {
  [KEYS.products]: [],
  [KEYS.fetchedProducts]: [],
  [KEYS.filteredProducts]: [],
  [KEYS.showCategoryFilter]: false,
  [KEYS.categories]: [],
  [KEYS.selectedCategories]: [],
  [KEYS.cartItems]: []
};

export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case UPDATE_CART:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case CLEAR:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}

export function clear() {
  return { type: CLEAR };
}

export function updateValue({ key, value }) {
  return {
    type: UPDATE_VALUE,
    payload: {
      key,
      value,
    },
  };
}

export function updateCart({ key, value }){
  return {
    type: UPDATE_CART,
    payload: {
      key,
      value,
    },
  }
}