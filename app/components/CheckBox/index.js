/**
 *
 * CheckBox
 *
 */

import React from 'react';
import { Checkbox } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class CheckBox extends React.Component {
  onChange = e => {
    console.log(`${e.target.checked}`);
  };
  render() {
    return (
      <div>
        <Checkbox onChange={this.onChange}>Name 1</Checkbox>
      </div>
    );
  }
}

CheckBox.propTypes = {};

export default CheckBox;
