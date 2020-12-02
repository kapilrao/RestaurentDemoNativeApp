export const HOME_INIT = "HOME_INIT";
export const HOME_SUBMITTING = "HOME_SUBMITTING";
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";
export const SET_RESTRO_LIST = "SET_RESTRO_LIST";
export const SELECT_RESTRO = "SELECT_RESTRO";

import {fetchRestroList} from "./api";

export const homeInit = () => ({
  errors: [],
  status: "init",
  type: HOME_INIT,
});

export const homeSubmitting = () => ({
  errors: [],
  status: "submitting",
  type: HOME_SUBMITTING,
});

export const homeSuccess = () => ({
  status: "completed",
  type: HOME_SUCCESS,
});

export const homeFailure = (errors) => ({
  errors,
  status: "error",
  type: HOME_FAILURE,
});

export const getRestroList = () => {
  return async (dispatch) => {
    try {
      dispatch(homeInit());
      dispatch(homeSubmitting());
      const response = await fetchRestroList();
      if (response.data) {
        dispatch({ type: SET_RESTRO_LIST, payload: response.data });
        dispatch(homeSuccess());
      }
    } catch (error) {
      dispatch(homeFailure(error));
    }
  };
};
