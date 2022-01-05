import { put, takeEvery,takeLatest, all, call } from "@redux-saga/core/effects"
import { userActions } from "./user.slice"

export function* login(props: any) {
  yield put(userActions.setData(props.payload))
  /*
   saga put dispara uma ação para falar com o redux  
  */ 
}

function* watchLogin() {
  yield takeLatest('user/login', login)
  /*
   saga take**** controla o número de interceptações realizadas 
    (clique nervoso :p )    
  */ 
}

export default function* userSaga() {
  yield all([
    watchLogin()
  ])
}