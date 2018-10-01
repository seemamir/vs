import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const Heading = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

Heading.propTypes = {
  children: PropTypes.element,
};

export default Heading;
