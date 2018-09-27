/**
 *
 * Taps
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Tabs, Icon } from 'antd';
const { TabPane } = Tabs;

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
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempora harum dolorum nulla asperiores doloribus recusandae!
              Itaque accusantium suscipit.
            </p>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="user" theme="outlined" className="Icon" />
              </span>
            }
            key="2"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempora harum dolorum nulla asperiores doloribus recusandae!
              Itaque accusantium suscipit.
            </p>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="cloud-upload" theme="outlined" className="Icon" />
              </span>
            }
            key="3"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempora harum dolorum nulla asperiores doloribus recusandae!
              Itaque accusantium suscipit.
            </p>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="exception" theme="outlined" className="Icon" />
              </span>
            }
            key="4"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempora harum dolorum nulla asperiores doloribus recusandae!
              Itaque accusantium suscipit.
            </p>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="team" theme="outlined" className="Icon" />
              </span>
            }
            key="5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              tempora harum dolorum nulla asperiores doloribus recusandae!
              Itaque accusantium suscipit.
            </p>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

Taps.propTypes = {};

export default Taps;
