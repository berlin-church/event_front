/*
 *
 * EventsPage actions
 *
 */

import {
  LIST_EVENTS_ACTION,
  LIST_EVENTS_SUCCESS_ACTION,
  LIST_EVENTS_ERROR_ACTION,
} from './constants';

export function listEventsAction() {
  return {
    type: LIST_EVENTS_ACTION,
  };
}

export function listEventsSuccessAction(events) {
  return {
    type: LIST_EVENTS_SUCCESS_ACTION,
    events
  };
}

export function listEventsErrorAction(error) {
  return {
    type: LIST_EVENTS_ERROR_ACTION,
    error,
  };
}
