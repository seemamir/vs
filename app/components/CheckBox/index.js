/**
 *
 * CheckBox
 *
 */

import React from 'react';
import { Checkbox, Icon } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  onChange = e => {
    this.setState({
      checked: e.target.checked,
    });
  };
  render() {
    return (
      <Checkbox
        style={{
          width: '100%',
          background: this.state.checked ? '#e6f7ff' : '',
          padding: '0 15px 5px 15px',
        }}
        onChange={this.onChange}
        className="checkbox-wrapper"
      >
        <span
          className="text"
          style={{ background: this.state.checked ? '#c1edff' : '' }}
        >
          Impression 1{' '}
        </span>
        <span className="icon">
          <Icon type="camera" theme="outlined" />
        </span>
      </Checkbox>
    );
  }
}

CheckBox.propTypes = {};

export default CheckBox;
