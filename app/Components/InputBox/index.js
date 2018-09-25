import React from 'react';
import { Input, Icon } from 'antd';
// import InputBox from './style';
class InputBox extends React.pureComponent {
  render() {
    return (
      <inputBox>
        <div>
          <h6>Add Tag</h6>
          <div>
            <Input
              placeholder="Enter your data"
              addonAfter={<Icon type="setting" />}
            />
          </div>
        </div>
      </inputBox>
    );
  }
}

InputBox.propTypes = {};

export default InputBox;
