import styled from 'styled-components';
const Foooter = styled.footer`
  background-color: #383737f7;
  height: 100px;
  padding: 20px 0;

  p {
    color: white;
  }
  .logo {
    background: #000;
    margin-left: 30px;
    display: inline-flex;
    color: white;
    padding: 10px;
    font-size: 22px;
  }
  span {
    color: white;
    display: inline-block;
  }

  ul {
    line-height: 60px;
    float: right;
    padding:left:0;
    li {
      list-style: none;
      display: inline-block;
      padding-left: 20px;
      font-size: 14px;
    }
  }
  a {
    color: white;
  }
`;
export default Foooter;
