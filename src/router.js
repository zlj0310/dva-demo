/* eslint-disable no-unused-vars,import/first */
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';

const { ConnectedRouter } = routerRedux;
import dynamic from 'dva/dynamic';


function RouterConfig({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/Error/'),
  });
  const routes = [
    {
      path: '/',
      component: () => import('./routes/IndexPage/'),
    },
    {
      path: '/mobile',
      component: () => import('./routes/Mobile/'),
    },
    {
      path: '/demo',
      models: () => [import('./models/demo')],
      component: () => import('./routes/Demo/'),
    },
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key} exact path={path} component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
        <Route component={error} />
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default RouterConfig;
