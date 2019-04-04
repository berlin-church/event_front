/*
 *
 * EventsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LIST_EVENTS_SUCCESS_ACTION } from './constants';

export const initialState = fromJS({});

function eventsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_EVENTS_SUCCESS_ACTION:
      return state.set('events', action.events.data.events);
    default:
      return state;
  }
}

export default eventsPageReducer;
