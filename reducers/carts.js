import produce from 'immer';
import {
  CHANGE_QTY_FAILURE,
  CHANGE_QTY_REQUEST,
  CHANGE_QTY_SUCCESS,
  INCREASE_QTY_FAILURE,
  INCREASE_QTY_REQUEST,
  INCREASE_QTY_SUCCESS,
  DECREASE_QTY_FAILURE,
  DECREASE_QTY_REQUEST,
  DECREASE_QTY_SUCCESS,
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
  increaseQtyLoading: false,
  increaseQtyError: null,
  increaseQtyDone: false,
  decreaseQtyLoading: false,
  decreaseQtyError: null,
  decreaseQtyDone: false,
  changeQtyLoading: false,
  changeQtyError: null,
  changeQtyDone: false,
  carts: [],
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_QTY_REQUEST:
      draft.changeQtyLoading = true;
      draft.changeQtyError = null;
      draft.changeQtyDone = false;
      break;
    case CHANGE_QTY_SUCCESS: {
      draft.changeQtyLoading = false;
      const item = draft.carts.find((v) => v.id === action.data.id);
      item.qty = action.data.qty;
      draft.changeQtyError = null;
      draft.changeQtyDone = true;
    }
      break;
    case CHANGE_QTY_FAILURE:
      draft.changeQtyLoading = false;
      draft.changeQtyError = action.data;
      draft.changeQtyDone = false;
      break;
    case DECREASE_QTY_REQUEST:
      draft.decreaseQtyLoading = true;
      draft.decreaseQtyError = null;
      draft.decreaseQtyDone = false;
      break;
    case DECREASE_QTY_SUCCESS: {
      draft.decreaseQtyLoading = false;
      const item = draft.carts.find((v) => v.id === action.data.id);
      item.qty = action.data.qty;
      draft.decreaseQtyError = null;
      draft.decreaseQtyDone = true;
    }
      break;
    case DECREASE_QTY_FAILURE:
      draft.decreaseQtyLoading = false;
      draft.decreaseQtyError = action.data;
      draft.decreaseQtyDone = false;
      break;
    case INCREASE_QTY_REQUEST:
      draft.increaseQtyLoading = true;
      draft.increaseQtyError = null;
      draft.increaseQtyDone = false;
      break;
    case INCREASE_QTY_SUCCESS: {
      draft.increaseQtyLoading = false;
      const item = draft.carts.find((v) => v.id === action.data.id);
      item.qty = action.data.qty;
      draft.increaseQtyError = null;
      draft.increaseQtyDone = true;
    }
      break;
    case INCREASE_QTY_FAILURE:
      draft.increaseQtyLoading = false;
      draft.increaseQtyError = action.data;
      draft.increaseQtyDone = false;
      break;
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
      draft.carts = draft.carts.filter((cart) => cart.id !== action.data);
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
