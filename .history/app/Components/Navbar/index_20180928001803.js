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
        <Header className="header" theme="light">
          <div className="logo">
            <b>Company logo</b>
          </div>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '58px', float: 'right' }}
            {/* className={this.state.openClass ? 'open_menu' : ''} */}
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
