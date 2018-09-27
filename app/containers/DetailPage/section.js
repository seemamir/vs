import React from 'react';
import styled from 'styled-components';
import CheckBox from '../../components/CheckBox/Loadable';
import InputWrapper from './input';

const Wrapper = styled.div`
  border: 1px solid #ccc;
  margin-top: 15px;
  padding: 15px 10px;
  border-radius: 5px;
  height: auto;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
    margin-top: 8px;
  }
`;

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>
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
