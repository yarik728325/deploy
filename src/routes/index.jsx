import React from 'react';
import { Route, Router } from 'react-router';
import history from '../utils/routing';

import Home from '../pages/Home';
import Edit from '../pages/Edit';
import Deteil from '../pages/Deteils';
import AddTab from '../pages/AddTab';

const routes = [
  {
    id:'deteil',
    path:'/card/:title',
    exact:true,
    component:Deteil
  },
  {
    id:'add',
    path:'/addnewCard',
    exact:true,
    component:AddTab
  },
  {
    id:'home',
    path:'/deploy',
    exact:true,
    component:Home
  },
  {
    id:'edit',
    path:'/edit',
    exact:true,
    component:Edit
  }
]

const RouterSwitch = () => {
  return (
    <Router history={history}>
      {routes.map((e) => {
        const { id, ...props } = e;
        return <Route key={id} {...props} />;
      })}
    </Router>
  );
};

export default RouterSwitch;