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
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      draft.productsLoading = true;
      draft.productsError = null;
      draft.productsDone = false;
      break;
    case LOAD_PRODUCTS_SUCCESS:
      draft.productsLoading = true;
      draft.productsLoading = action.data;
      draft.productsError = null;
      draft.productsDone = false;
      break;
    case LOAD_PRODUCTS_FAILURE:
      draft.productsLoading = true;
      draft.productsError = null;
      draft.productsDone = false;
      break;
    default:
      return state;
  }
});

export default reducer;
