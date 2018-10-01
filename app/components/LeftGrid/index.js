import React from 'react';
import { Row, Col } from 'antd';
import Box from '../Content/styles';
import Heading from '../Heading/Loadable';
import Dropdown from '../Dropdown/Loadable';
import Draft from '../Draft/Loadable';
import BlockButton from '../BlockButton/Loadable';
import { Wrapper } from '../../containers/DetailPage/Loadable';
import Button from '../Button/Loadable';

/* eslint-disable react/prefer-stateless-function */
class LeftGrid extends React.Component {
  render() {
    return (
      <Box>
        <Row>
          <Col span={22}>
            <Heading>
              <b>NAME1 NAME1</b>
            </Heading>
          </Col>
          <Col span={2}>
            <Draft>Draft</Draft>
          </Col>
        </Row>
        <hr className="hr" />
        <Row>
          <Col xs={12} sm={11} lg={18}>
            <span>Address 1</span>
            <br />
            <span>Address 2</span>
            <br />
            <span>City</span>
            <br />
            <span>State</span>
          </Col>
          <Col xs={12} sm={11} lg={6}>
            <BlockButton block>View Full Report</BlockButton>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={19}>
            <span>Select a Report Type</span>
          </Col>
          <Col xs={12} sm={12} lg={3}>
            <Dropdown>Report Type here</Dropdown>
          </Col>
        </Row>
        <Row>
          <Col sm={22} lg={12}>
            <Wrapper className="mr5">
              <b>Section 1</b>
            </Wrapper>
          </Col>
          <Col sm={22} lg={12}>
            <Wrapper>
              <b>Section 2</b>
            </Wrapper>
          </Col>
        </Row>
        <Row>
          <Col sm={22} lg={12}>
            <Wrapper className="mr5">
              <b>Section 3</b>
            </Wrapper>
          </Col>
          <Col sm={22} lg={12}>
            <Wrapper>
              <b>Section 4</b>
            </Wrapper>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Box>
    );
  }
}

LeftGrid.propTypes = {};

export default LeftGrid;
