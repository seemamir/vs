import React from 'react';
import { Row, Col, Layout } from 'antd';
import Box from './styles';
import LeftGrid from '../LeftGrid/Loadable';
import RightGrid from '../RightGrid/Loadable';

const { Content } = Layout;

const ContentWrapper = props => (
  <Content>
    {/* {console.log(props)} */}
    <Row>
      <Col sm={24} lg={12}>
        <LeftGrid selectedRows={props.selectedRows} />
      </Col>

      <Col sm={24} lg={12}>
        <Box className="gutter-box">
          <RightGrid />
        </Box>
      </Col>
    </Row>
  </Content>
);

ContentWrapper.propTypes = {};

export default ContentWrapper;
