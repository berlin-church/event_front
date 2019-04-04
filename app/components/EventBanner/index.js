/**
 *
 * EventBanner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Banner = styled.div`
  display: inline-block;
  margin: 1.5%;
  border-radius: 3px;
  box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.75);
  padding: 0.5rem 0;
  width: 25em;
  height: ${props => (props.primary ? '25em' : '15em')};
  background: transparent;
  background-image: url(${props =>
    props.imageUrl || 'https://via.placeholder.com/150'});
  background-size: 100% 80%;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  color: #fff;
  text-transform: uppercase;
  height: 80%;
  text-align: center;
  padding-top: 40%;
  font-size: 1.5em;
  letter-spacing: 0.1em;
`;
const Button = styled.div`
  border-top: 1px solid #eae0e0;
  color: orange;
  text-transform: uppercase;
  margin-top: ${props => (props.primary ? '2.5em' : '0.8em')};
  padding: 0.5em 0 1em 2em;
`;

function EventBanner(props) {
  const { event } = props;

  return (
    <Banner primary={event.primary} key={event.id} imageUrl={event.imageUrl}>
      <Title>{event.name}</Title>
      <Button primary={event.primary}>
        {event.name === 'Community Group' ? (
          <FormattedMessage {...messages.all} />
        ) : (
          <FormattedMessage {...messages.register} />
        )}
      </Button>
    </Banner>
  );
}

// EventBanner.propTypes = {
//   event: PropTypes.object,
// };

export default EventBanner;
