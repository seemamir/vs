/**
 *
 * ContHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const ContHeader = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

ContHeader.propTypes = {
  children: PropTypes.string,
};

export default ContHeader;
