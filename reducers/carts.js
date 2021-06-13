import produce from 'immer';
import {
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE,
} from '../actions/carts';

export const initialState = {
  addCartLoading: false,
  addCartError: null,
  addCartDone: false,
  removeCartLoading: false,
  removeCartError: null,
  removeCartDone: false,
  loadCartLoading: false,
  loadCartError: null,
  loadCartDone: false,
  carts: [],
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_CART_REQUEST:
      draft.addCartLoading = true;
      draft.addCartError = null;
      draft.addCartDone = false;
      break;
    case ADD_CART_SUCCESS:
      draft.addCartLoading = false;
      draft.carts = draft.carts.concat(action.data);
      draft.addCartError = null;
      draft.addCartDone = true;
      break;
    case ADD_CART_FAILURE:
      draft.addCartLoading = false;
      draft.addCartError = action.data;
      draft.addCartDone = false;
      break;
    case REMOVE_CART_REQUEST:
      draft.removeCartLoading = true;
      draft.removeCartError = null;
      draft.removeCartDone = false;
      break;
    case REMOVE_CART_SUCCESS:
      draft.removeCartLoading = false;
      draft.carts = draft.carts.filter((cart) => (cart.id !== action.data));
      draft.removeCartError = null;
      draft.removeCartDone = true;
      break;
    case REMOVE_CART_FAILURE:
      draft.removeCartLoading = false;
      draft.removeCartError = action.data;
      draft.removeCartDone = false;
      break;
    case LOAD_CART_REQUEST:
      draft.loadCartLoading = true;
      draft.loadCartError = null;
      draft.loadCartDone = false;
      break;
    case LOAD_CART_SUCCESS:
      draft.loadCartLoading = false;
      draft.carts = action.data;
      draft.loadCartError = null;
      draft.loadCartDone = true;
      break;
    case LOAD_CART_FAILURE:
      draft.loadCartLoading = false;
      draft.loadCartError = action.data;
      draft.loadCartDone = false;
      break;
    default:
      return state;
  }
});

export default reducer;
