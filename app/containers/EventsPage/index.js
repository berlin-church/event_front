/**
 *
 * EventsPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import EventHeader from 'components/EventHeader';
import EventsBannerList from 'components/EventsBannerList';
import makeSelectEventsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class EventsPage extends React.PureComponent {
  render() {
    // fake data
    const events = {
      connect: {
        id: 1,
        name: 'Connect',
        imageUrl:
          'https://media.istockphoto.com/photos/view-of-petronas-twin-tower-picture-id946787992',
        primary: true,
      },
      addPhoto: {
        id: 2,
        name: 'Add Picture',
        imageUrl: 'https://via.placeholder.com/150',
      },
      community: {
        id: 3,
        name: 'Community Group',
        imageUrl:
          'https://images.unsplash.com/photo-1551687282-7f912feaf644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        primary: true,
      },
    };

    return (
      <div>
        <Helmet>
          <title>EventsPage</title>
          <meta name="description" content="Description of EventsPage" />
        </Helmet>
        <EventHeader />

        <EventsBannerList events={events} />
      </div>
    );
  }
}

// EventsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

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
