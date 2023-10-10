import * as AT from "app/camunda_redux/redux/constants/ActionTypes";

const initialState = {
  loading: false,
  success: false,
  leadData: [],
  error: "",
};

export const leadDetails = (state = initialState, action) => {
  switch (action.type) {
    // ---------------------- Lead details

    case AT.FETCH_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AT.FETCH_LEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        leadData: action.payload,
      };
    case AT.FETCH_LEAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // --------------------------- Lead add

    case AT.ADD_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AT.ADD_LEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        leadData: [...state.leadData, action.payload],
      };
    case AT.ADD_LEAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ---------------------- DELETE LEAD

    case AT.DELETE_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AT.DELETE_LEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        leadData: action.payload,
      };
    case AT.DELETE_LEAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ........................ EDIT LEAD DETAILS

    case AT.EIDT_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AT.EDIT_LEAD_SUCCESS:
      let newData = state.leadData.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        loading: false,
        leadData: newData,
      };
    case AT.EDIT_LEAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
