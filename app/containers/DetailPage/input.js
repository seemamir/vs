import React from 'react';
import { Form } from 'antd';
import styled from 'styled-components';
import InputBox from '../../components/InputBox/Loadable';
const FormItem = Form.Item;
const Wrapper = styled.div`
  background: #eeeeee;
  margin-top: 10px;
  padding: 10px;
`;
const InputWrapper = () => (
  <Wrapper>
    <Form layout="vertical">
      <FormItem label="Add tag">
        <InputBox />
      </FormItem>
    </Form>
  </Wrapper>
);
export default InputWrapper;
