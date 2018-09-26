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
        <Col span={12}>
          <Box>
            <Row>
              <Col span={22}>
                <ContHeader>
                  <b>NAME1 NAME1</b>
                </ContHeader>
              </Col>
              <Col span={2}>
                <Draft />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col span={18}>
                <span>Address 1</span>
                <br />
                <span>Address 2</span>
                <br />
                <span>City</span>
                <br />
                <span>State</span>
              </Col>
              <Col span={6}>
                <BlockButton>View Full Report</BlockButton>
              </Col>
            </Row>
            <Row>
              <Col span={18}>
                {/* <ContHeader>Select a Report Type</ContHeader> */}
                <h4>Select a Report Type</h4>
              </Col>
              <Col span={6}>
                <BlockButton>View Full Report</BlockButton>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Wrapper>
                  <b>Section 1</b>
                </Wrapper>
              </Col>
              <Col span={12}>
                <Wrapper>
                  <b>Section 2</b>
                </Wrapper>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Wrapper>
                  <b>Section 3</b>
                </Wrapper>
              </Col>
              <Col span={12}>
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

        <Col span={12}>
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
