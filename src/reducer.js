import {
  HOME_INIT,
  HOME_SUBMITTING,
  HOME_SUCCESS,
  HOME_FAILURE,
  SET_RESTRO_LIST,
  SELECT_RESTRO,
} from "./action";

const initialState = {
  errors: {},
  status: "init",
  restorentList: null,
  selectedRestorent: null,
  restroMapView: null,
};

export default function home(state = initialState, action) {
  const { status = "init", errors, payload } = action || {};
  switch (action.type) {
    case HOME_INIT:
      return { ...state, status, errors };
    case HOME_SUBMITTING:
      return { ...state, status };
    case HOME_SUCCESS:
      return { ...state, status };
    case HOME_FAILURE:
      return { ...state, status, errors };
    case SET_RESTRO_LIST:
      return { ...state, restorentList: { ...state, restorentList: payload } };
    case SELECT_RESTRO:
      return { ...state, selectedRestorent: payload };
    default:
      return { ...state };
  }
}
