import produce from 'immer';
import {
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_REQUEST,
} from '../actions/products';

export const initialState = {
  productsLoading: false,
  productsError: null,
  productsDone: false,
  products: [],
  nextProducts: null,
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      draft.productsLoading = true;
      draft.productsError = null;
      draft.productsDone = false;
      break;
    case LOAD_PRODUCTS_SUCCESS:
      draft.productsLoading = false;
      draft.products = draft.products.concat(action.data.products);
      draft.nextProducts = action.data.next;
      draft.productsDone = true;
      break;
    case LOAD_PRODUCTS_FAILURE:
      draft.productsLoading = false;
      draft.productsError = action.data;
      draft.productsDone = false;
      break;
    default:
      return state;
  }
});

export default reducer;
