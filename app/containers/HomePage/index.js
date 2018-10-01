import React from 'react';
import { Layout } from 'antd';
import Navbar from '../../components/Navbar/Loadable';
import ListItems from '../../components/Table/Loadable';
import Footer from '../../components/Footer/Loadable';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <ListItems />
        </Layout>
        <Footer />
      </div>
    );
  }
}
