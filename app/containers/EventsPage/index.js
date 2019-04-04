/**
 *
 * EventsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import EventHeader from 'components/EventHeader';
import EventsBannerList from 'components/EventsBannerList';
import makeSelectEvents from './selectors';
import reducer from './reducer';
import saga from './saga';
import { listEventsAction } from './actions';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class EventsPage extends React.PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(listEventsAction());
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <Helmet>
          <title>EventsPage</title>
          <meta name="description" content="Description of EventsPage" />
        </Helmet>
        <EventHeader />
        {events && <EventsBannerList events={events} />}
      </div>
    );
  }
}

EventsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  events: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
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
