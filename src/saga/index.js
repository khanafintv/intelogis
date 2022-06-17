import { actionModal, ASYNC_MODAL } from '../store/reducers';

import { put, takeEvery } from 'redux-saga/effects';

function* modalWorker() {
  yield put(actionModal());
}

export function* modalWatcher() {
  yield takeEvery(ASYNC_MODAL, modalWorker);
}
