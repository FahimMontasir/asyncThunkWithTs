import axios from "axios";
import { ActionType } from "../actionTypes";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};