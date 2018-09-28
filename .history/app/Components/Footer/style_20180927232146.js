import styled from 'styled-components';
const Foooter = styled.footer`
  background-color: #383737f7;
  height: auto;
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
    margin-top: 15px;
    float: right;
    padding-left: 0;
    margin-bottom: 0;
    li {
      list-style: none;
      display: inline-block;
      padding-left: 20px;
      font-size: 14px;
    }
    @media (max-width: 767px) {
      margin-top: 0;
      li {
        display: block;
        padding: 5px 0;
      }
    }
  }
  a {
    color: white;
  }
`;
export default Foooter;
