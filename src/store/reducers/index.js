const initialState = {
  modal: false,
  orders: [],
  points: [],
  orderId: null,
};

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_POINTS = 'FETCH_POINTS';
export const MODAL = 'MODAL';
export const ASYNC_MODAL = 'ASYNC_MODAL';
export const MODAL_OFF = 'MODAL_OFF';
export const ORDER_ID = 'ORDER_ID';

export const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, orders: action.payload };

    case FETCH_POINTS:
      return { ...state, points: action.payload };

    case MODAL:
      return { ...state, modal: true };

    case MODAL_OFF:
      return { ...state, modal: false };

    case ORDER_ID:
      return { ...state, orderId: action.payload };

    default:
      return state;
  }
};

export const actionModal = () => ({ type: MODAL });
export const asyncActionModal = () => ({ type: ASYNC_MODAL });
