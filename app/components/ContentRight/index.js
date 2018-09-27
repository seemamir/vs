/**
 *
 * ContentRight
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Taps from '../Taps';
import Draft from '../Draft';
const ContWrapper = styled.div``;

const ContentRight = () => (
  <ContWrapper>
    <Row>
      <Col span={24}>
        <Taps />
        <h4>
          <b>Summary</b>
        </h4>
        <hr className="hr" />
        <h4>
          <b>Section 1</b>
        </h4>
        <hr className="hr" />
        <span>Text Line 1</span>
        <br />
        <span>Long Text Line 1</span>
        <br />
        <span>Paragraph1</span>
        <hr className="hr" />
        <Row>
          <Col xs={12} sm={12} span={20}>
            <h4>
              <b>Section 2</b>
            </h4>
            <hr className="hr" />
            <span>Text Line 1</span>
            <br />
            <span>Long Text Line 1</span>
          </Col>
          <Col xs={12} sm={12} span={4}>
            <Draft>hyperlink1</Draft>
          </Col>
        </Row>
        <h4>
          <b>Section 3</b>
        </h4>
        <hr className="hr" />
        <span>Long Text Line</span>
        <br />
        <span>Paragraph1</span>
        <h4>
          <b>Section 4</b>
        </h4>
        <hr className="hr" />
        <span>Long Text Line</span>
        <br />
        <span>Paragraph1</span>
        <h4>
          <b>Section 5</b>
        </h4>
        <hr className="hr" />
        <span>Long Text Line</span>
        <br />
        <span>Paragraph1</span>
      </Col>
    </Row>
  </ContWrapper>
);

ContentRight.propTypes = {};

export default ContentRight;
