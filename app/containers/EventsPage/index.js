/**
 *
 * EventsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEventsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import EventBanner from 'components/EventBanner';

/* eslint-disable react/prefer-stateless-function */
export class EventsPage extends React.PureComponent {
  render() {
    // fake data
    const event = { name: 'Community group' };

    return (
      <div>
        <Helmet>
          <title>EventsPage</title>
          <meta name="description" content="Description of EventsPage" />
        </Helmet>
        <EventBanner event={event}/>
      </div>
    );
  }
}

EventsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eventsPage: makeSelectEventsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventsPage', reducer });
const withSaga = injectSaga({ key: 'eventsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventsPage);
