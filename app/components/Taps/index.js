/**
 *
 * Taps
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

/* eslint-disable react/prefer-stateless-function */
class Taps extends React.Component {
  render() {
    return (
      <div>
        <Tabs type="card">
          <TabPane
            tab={
              <span>
                <Icon type="apple" className="Icon" />
              </span>
            }
            key="1"
          />
          <TabPane
            tab={
              <span>
                <Icon type="user" theme="outlined" className="Icon" />
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="cloud-upload" theme="outlined" className="Icon" />
              </span>
            }
            key="3"
          >
            Tab 3
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="exception" theme="outlined" className="Icon" />
              </span>
            }
            key="4"
          >
            Tab 4
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="team" theme="outlined" className="Icon" />
              </span>
            }
            key="5"
          >
            Tab 5
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="barcode" theme="outlined" className="Icon" />
              </span>
            }
            key="6"
          >
            Tab 6
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

Taps.propTypes = {};

export default Taps;
