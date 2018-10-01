import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import HeaderWrapper from './styles';

const { Header } = Layout;

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      openClass: false,
      icon: true,
    };
  }
  handleMenu = () => {
    this.setState({
      openClass: !this.state.openClass,
      icon: !this.state.icon,
    });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/detail">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="/detail">
            2nd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <HeaderWrapper>
        <Header className="header" theme="light">
          <Dropdown overlay={menu} className="collapse__menu">
            <a className="ant-dropdown-link" href="#">
              <Icon type="bars" />
            </a>
          </Dropdown>
          <div className="logo">
            <b>Company logo</b>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className={this.state.openClass ? 'open_menu' : ''}
          >
            <Menu.Item key="1" className="nav-item">
              <span className="nav-six">6</span>
              <span className="nav-type1">
                Type <br /> 1 Item
              </span>
            </Menu.Item>
            <Menu.Item key="2" className="nav-item">
              <span className="nav-six">8</span>
              <span className="nav-type1">
                Type <br /> 1 Item
              </span>
            </Menu.Item>
            <Menu.Item key="3" className="nav-item">
              <span className="nav-type1">
                UserName1 <br /> Company1
              </span>
            </Menu.Item>
            <Menu.Item key="4" className="nav-item">
              <Icon type="user" theme="outlined" className="user-icon" />
            </Menu.Item>
          </Menu>
          <span className="fold_icon" onClick={this.handleMenu}>
            <Icon
              type={this.state.icon ? 'menu-fold' : 'close'}
              style={{ fontSize: 24, color: '#008EFF' }}
            />
          </span>
        </Header>
      </HeaderWrapper>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
