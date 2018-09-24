/**
 *
 * Footer
 *
 */

import React from 'react';
import {} from 'antd';
import Foooter from './style';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <Foooter>
        <div>
          <h3>Company logo</h3>
        </div>
        <p>Terms of services</p>
        <p>Term</p>
      </Foooter>
    );
  }
}

Footer.propTypes = {};

export default Footer;
