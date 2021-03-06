import React from 'react';
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
import makeSelectHome from '../Home/selectors';
import Content from '../../components/Content/Loadable';

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
          <Layout style={{ margin: '100px 0 50px 0' }}>
            <Content selectedRows={this.props.selectedRows} />
          </Layout>
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
  selectedRows: makeSelectHome(),
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
