import * as api from "@/lib/api";
import { createPromiseThunk } from "lib/asyncPromiseThunk";

// 액션 생성
const API_CALL = "API_CALL";
const API_LOAD = "API_LOAD";
const API_FAILURE = "API_FALURE";

export const getDataSample = createPromiseThunk("API", api.getData);

// 초기 state
const initialState = {
  data: null,
  status: false,
  error: null,
};

// reducer 생성
export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL:
      return {
        ...state,
        data: null,
        status: false,
        error: null,
      };
    case API_UPDATE:
      return {
        ...state,
        data: {
          title: action.data.title,
          id: action.data.id,
          body: action.data.body,
        },
        status: true,
        error: false,
      };
    case API_FAILURE:
      return {
        data: null,
        status: false,
        error: true,
      };
    default:
      return state;
  }
}
