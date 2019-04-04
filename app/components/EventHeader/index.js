/**
 *
 * EventHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Header = styled.div`
  margin: 1.5%;
  background: black;
  color: #fff;
  text-align: center;
  padding: 1rem;
  font-size: 1.5em;
`;

function EventHeader() {
  return (
    <div>
      <Header>
        <FormattedMessage {...messages.header} />
        <strong>church</strong>
      </Header>
    </div>
  );
}

// EventHeader.propTypes = {};

export default EventHeader;
