/**
 *
 * EventsBannerList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventBanner from '../EventBanner';

const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  margin: 1.5%;
`;

function EventsBannerList(props) {
  const { events } = props;
  return (
    <Wrapper>
      {Object.keys(events).map(event => (
        <EventBanner key={Math.random()} event={events[event]} />
      ))}
    </Wrapper>
  );
}

// EventsBannerList.propTypes = {};

export default EventsBannerList;
