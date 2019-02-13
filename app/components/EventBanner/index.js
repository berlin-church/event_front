/**
 *
 * EventBanner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Banner = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid white;
`

const Title = styled.span`
  color: red;
  backgroundColor: black;
`

const Button = styled.span`
  color: green;
`

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function EventBanner(props) {
  const { event } = props;

  return (
    <Banner>
      <Title>{event.name}</Title>
      <Button>
        <FormattedMessage {...messages.register} />
      </Button>
    </Banner>
  );
}

EventBanner.propTypes = {
  event: PropTypes.object,
};

export default EventBanner;
