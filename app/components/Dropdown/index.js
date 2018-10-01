import React from 'react';
import PropTypes from 'styled-components';
import { Menu, Dropdown, Button, Icon } from 'antd';

/* eslint-disable react/prefer-stateless-function */
class DropdownField extends React.Component {
  handleMenuClick = e => {
    console.log('click', e);
  };
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />3rd item
        </Menu.Item>
      </Menu>
    );
    const { children, ...props } = this.props;
    return (
      <Dropdown overlay={menu} {...props}>
        <Button>
          {children} <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}

DropdownField.propTypes = {
  // children: PropTypes.string,
};

export default DropdownField;
