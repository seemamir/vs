import styled from 'styled-components';
const Foooter = styled.footer`
  background-color: #2f4f4f;
  fontsize: 10px;
  height: 100px;
  margin-bottom: 20px;
  margin-top: 20px;

  p {
    color: white;
  }
  .logo {
    width: 120px;
    height: 35px;
    background: red;
    margin-left: 100px;
    display: inline-flex;
    margin-top: 33px;
  }
  span {
    color: white;
    display: inline-block;
  }
  ul {
    padding-left: 100px;
    padding-top: 30px;
  }
  li {
    list-style: none;
    display: inline-block;
    padding-left: 20px;
  }
  a {
    color: white;
  }
`;
export default Foooter;
