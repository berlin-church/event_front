/*
 * EventBanner Messages
 *
 * This contains all the text for the EventBanner component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.EventBanner';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Event',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
});
