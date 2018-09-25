/**
 *
 * BlockButton
 *
 */

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const BlockButton = ({ children, ...props }) => (
  <Button block {...props}>
    {children}
  </Button>
);

BlockButton.propTypes = {
  children: PropTypes.string,
};

export default BlockButton;
