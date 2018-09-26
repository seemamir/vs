import React from 'react';
import styled from 'styled-components';
import CheckBox from '../../components/CheckBox/Loadable';
import InputWrapper from './input';

const Wrapper = styled.div`
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 15px 5px;
  border-radius: 5px;
  height: auto;
  margin-right: 5px;
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
    margin-top: 8px;
  }
`;

const Section = ({ children, props }) => (
  <Wrapper>
    <h4>{children}</h4>
    <CheckBox checked="true" />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <InputWrapper />
  </Wrapper>
);
export default Section;
