import { takeEvery } from "redux-saga/effects";
import { logoutSaga } from "./auth";
import * as actionTypes from "../actions/actionTypes";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}
