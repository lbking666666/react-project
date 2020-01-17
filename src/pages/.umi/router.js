import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    redirect: '/home',
    exact: true,
    _title: 'bigScreen',
    _title_default: 'bigScreen',
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/layoutSider'),
        })
      : require('../../layouts/layoutSider').default,
    routes: [
      {
        name: '服务保障管控系统',
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/哈飞大屏/bigScreen/src/pages/Home/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () => import('../Home'),
            })
          : require('../Home').default,
        exact: true,
        _title: 'bigScreen',
        _title_default: 'bigScreen',
      },
      {
        name: '服务保障管控系统',
        path: '/list',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/哈飞大屏/bigScreen/src/pages/List/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () => import('../List'),
            })
          : require('../List').default,
        exact: true,
        _title: 'bigScreen',
        _title_default: 'bigScreen',
      },
      {
        name: '服务保障管控系统',
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/哈飞大屏/bigScreen/src/pages/Mix/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () => import('../Mix'),
            })
          : require('../Mix').default,
        exact: true,
        _title: 'bigScreen',
        _title_default: 'bigScreen',
      },
      {
        component: () =>
          React.createElement(
            require('D:/哈飞大屏/bigScreen/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'bigScreen',
        _title_default: 'bigScreen',
      },
    ],
    _title: 'bigScreen',
    _title_default: 'bigScreen',
  },
  {
    component: () =>
      React.createElement(
        require('D:/哈飞大屏/bigScreen/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'bigScreen',
    _title_default: 'bigScreen',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
