const CLEAR = "SIGNUP/CLEAR";
const UPDATE_VALUE = "SIGNUP/UPDATE_VALUE";

export const KEYS = {
  products: "products",
  fetchedProducts: "fetchedProducts",
  filteredProducts: "filteredProducts",
  showCategoryFilter: "showCategoryFilter",
  categories: "categories",
  selectedCategories: "selectedCategories"
};

export const INITIAL_STATE = {
  [KEYS.products]: [],
  [KEYS.fetchedProducts]: [],
  [KEYS.filteredProducts]: [],
  [KEYS.showCategoryFilter]: false,
  [KEYS.categories]: [],
  [KEYS.selectedCategories]: []
};

export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_VALUE:
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
