import React from 'react';
import { Input, Icon } from 'antd';

const InputBox = () => (
  <Input
    placeholder="Enter your data"
    addonAfter={<Icon type="plus" />}
    className="input-box"
  />
);

InputBox.propTypes = {};

export default InputBox;
