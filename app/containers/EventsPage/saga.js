// import { LOCATION_CHANGE } from 'react-router-redux';
import { take, takeLatest, put, cancel, call } from 'redux-saga/effects';
import config from 'containers/App/config';
import { LIST_EVENTS_ACTION } from './constants';
import { listEventsSuccessAction, listEventsErrorAction } from './actions';
import request from 'utils/request';

const { apiHost } = config;

function* listEvents() {
  try {
    const options = {
      method: 'POST',
      'Content-Type': 'application/json',
      credentials: 'same-origin'
    };
    const response = yield call(request, `${apiHost}?query={events { id, name }}`, options);
    yield put(listEventsSuccessAction(response));
  } catch (error) {
    yield put(listEventsErrorAction(error));
  }
}

// Individual exports for testing
export default function* eventsPageSaga() {
  yield takeLatest(LIST_EVENTS_ACTION, listEvents);
}
