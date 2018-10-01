/**
 *
 * Button
 *
 */

import React from 'react';
import { Button } from 'antd';

const DefaultButton = ({ children, ...props }) => (
  <Button type="primary" className="primary-button" {...props}>
    {children}
  </Button>
);

DefaultButton.propTypes = {};

export default DefaultButton;
