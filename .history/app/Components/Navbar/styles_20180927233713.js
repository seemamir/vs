import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: auto;
  box-shadow: 0px 1px 10px 0 #ccc;
  .ant-layout-header {
    background: white;
    border-bottom: 1px solid #e8e8e8;
    .logo {
      width: 120px;
      height: 31px;
      float: left;
    }
    .ant-menu-horizontal {
      border: 0;
      .ant-menu-item {
        color: #555;
        border: 0;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.03em;
        .ant-menu-item-active,
        .ant-menu-item-selected {
          color: #0780e0;
        }
      }
    }

    .fold_icon {
      display: none;
    }
    .logo {
      font-size: 16px;
    }
    @media (max-width: 650px) {
      padding: 0;
      .logo {
        margin-left: 20px;
      }
      .fold_icon {
        display: block;
        position: absolute;
        right: 20px;
        top: 0;
      }
      .ant-menu-horizontal {
        visibility: hidden;
        float: none;
        height: 0;
        width: 100%;
        padding-bottom: 20px;
        text-align: center;
        margin-top: 32px;
        transition: height 2s;
        -webkit-transition: height 2s;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
        .ant-menu-item {
          display: block;
          width: 100%;
          color: black !important;
          height: 50px;
          font-size: 16px;
          line-height: 50px;
          margin: auto;
        }
      }
      .open_menu {
        visibility: visible;
        height: auto;
        transition: height 2s;
        -webkit-transition: height 2s;
      }
    }
  }
  .nav-six {
    font-size: 28px;
    padding-right: 5px;
  }
  .nav-type1 {
    font-size: 12px;
    display: inline-block;
    line-height: 15px;
  }
  .user-icon {
    font-size: 20px;
  }
`;
export default HeaderWrapper;
