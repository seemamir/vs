/**
 *
 * DetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Layout } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navbar from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import Content from '../../components/Content/Loadable';
import { Wrapper } from './Loadable';

/* eslint-disable react/prefer-stateless-function */
export class DetailPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DetailPage</title>
          <meta name="description" content="Description of DetailPage" />
        </Helmet>
        <Layout>
          <Navbar />
          <Content />
          <Footer />
        </Layout>
      </div>
    );
  }
}

DetailPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailpage: makeSelectDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'detailPage', reducer });
const withSaga = injectSaga({ key: 'detailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DetailPage);
