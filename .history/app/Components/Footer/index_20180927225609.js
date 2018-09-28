/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Foooter from './style';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <Foooter>
        <Row>
          <Col xs={12} sm={12} lg={12}>
            <div className="logo">Company logo</div>
          </Col>
          <Col xs={10} sm={12} lg={12}>
            <ul>
              <li>
                <Link to="">Terms Of Services</Link>
              </li>
              <li>
                <Link to="">Help</Link>
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
