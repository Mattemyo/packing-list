import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import BounceSwitch from './components/transitions/BounceSwitch';
import './App.css';

export default () => 
  <Layout>
    <BounceSwitch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/fetchdata/:startDateIndex?" component={FetchData} />
    </BounceSwitch>
  </Layout>
;
