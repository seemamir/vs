import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from 'containers/HomePage/Loadable';
import DetailPage from '../DetailPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
