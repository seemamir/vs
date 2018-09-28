import React from 'react';
import { Layout, Menu, Icon } from 'antd';
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
  handleMenu = e => {
    this.setState({
      openClass: !this.state.openClass,
      icon: !this.state.icon,
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <Header
          className="header"
          theme="light"
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          <div className="logo">
            <b>Company logo</b>
          </div>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '62px', float: 'right' }}
            className={this.state.openClass ? 'open_menu' : ''}
          >
            <Menu.Item key="1">FAQ</Menu.Item>
            <Menu.Item key="2">Coins</Menu.Item>
            <Menu.Item key="3">Help</Menu.Item>
            <Menu.Item key="4" className="default_btn">
              Login
            </Menu.Item>
            <Menu.Item key="5" className="primary__btn">
              Signup
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
