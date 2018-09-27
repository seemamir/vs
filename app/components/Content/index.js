/**
 *
 * Content
 *
 */

import React from 'react';
import { Row, Col, Layout } from 'antd';
import Box from './styles';
import ContHeader from '../ContHeader/Loadable';
import Draft from '../Draft/Loadable';
import BlockButton from '../BlockButton/Loadable';
import { Wrapper } from '../../containers/DetailPage/Loadable';
import DefaultButton from '../Button';
import ContentRight from '../ContentRight';

const { Content } = Layout;

const ContentWrapper = () => (
  <Layout>
    <Content>
      <Row>
        <Col sm={24} lg={12}>
          <Box>
            <Row>
              <Col span={22}>
                <ContHeader>
                  <b>NAME1 NAME1</b>
                </ContHeader>
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
                <BlockButton>View Full Report</BlockButton>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={11} lg={18}>
                {/* <ContHeader>Select a Report Type</ContHeader> */}
                <h4>Select a Report Type</h4>
              </Col>
              <Col xs={12} sm={11} lg={18}>
                <BlockButton>View Full Report</BlockButton>
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
                <Wrapper>
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
                <DefaultButton />
              </Col>
            </Row>
          </Box>
        </Col>

        <Col sm={24} lg={12}>
          <Box className="gutter-box">
            <ContentRight />
          </Box>
        </Col>
      </Row>
    </Content>
  </Layout>
);

ContentWrapper.propTypes = {};

export default ContentWrapper;
