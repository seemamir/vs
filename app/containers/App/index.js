import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from 'containers/Home/Loadable';
import DetailPage from '../DetailPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Navbar from '../../components/Navbar/Loadable';
import Footer from '../../components/Footer/Loadable';
export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={DetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
