import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .ant-checkbox-checked .ant-checkbox-inner{
    background:#00b22d;
    border-color:#00b22d;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner{
    border-color:#00b22d;
    
  }
  .ant-table table{
    margin-top:10px;
  }
  .primary-button{
    width:130px;
    margin-top:20px;
    // margin-left:30px;
    background:#4267b2;
    border-color:#4267b2;
    margin-bottom:10px;
  }
  .primary-button:hover{
    background:#254179;
  }
.link-draft{
  color:grey;
  text-decoration: underline;
  :hover{
    text-decoration: underline;
    color:grey;
  }
}

  .checkbox-wrapper{
    background: #eee;
    padding: 0 5px 5px 5px;
    border-radius:5px;
    
    .text{
      background: #ddd;
      padding:3px;
    }
    .icon{
      font-size:20px;
      margin-left:8px;
      opacity:0.2
    }
    .ant-checkbox-input:checked + label{
      color:red;
    }
    :hover, :active, :focus, :focus-within, :visited{
      background: #e6f7ff;
      .text{
        background: #c1edff
      }
    }
  }
  .ant-form-vertical .ant-form-item{
    margin-bottom:0;
  }
  .mr5{
    margin-right:5px;
  }
  .hr{
    border-color: #dad3d314;
    margin-top:10px;
    margin-bottom:10px;
  }
  .heading{
    margin-bottom:0;
  }
 
  
`;
