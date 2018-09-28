import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Navbar from '../../components/Navbar/Loadable';
import ListItems from '../../components/Table/Loadable';
import Footer from '../../components/Footer/Loadable';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ListItems />
        <Footer />
      </div>
    );
  }
}
