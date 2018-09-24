/**
 *
 * Header
 *
 */

import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import Wrapper from './styles';
const { Header } = Layout;
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Header>
          <Icon type="menu-fold" theme="outlined" className="Icon-top" />
          <div className="logo" />
          <Menu
            /* theme="light" */
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '50px', float: 'right', borderBottom: '0' }}
          >
            <Menu.Item key="1">
              <span className="nav-six">6</span>
              <span className="nav-type1">
                Type <br /> 1 Item
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-six">8</span>
              <span className="nav-type1">
                Type <br /> 1 Item
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-type1">
                UserName1 <br /> Company1
              </span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" theme="outlined" className="user-icon" />
            </Menu.Item>
          </Menu>
        </Header>
      </Wrapper>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
