/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Foooter from './style';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <Foooter>
        <Row>
          <Col span={12}>
            <div className="logo" />
          </Col>
          <Col span={12}>
            <ul>
              <li>
                <Link to="/">Terms Of Services</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Foooter>
    );
  }
}

Footer.propTypes = {};

export default Footer;
