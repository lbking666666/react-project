import { resolve } from 'path'
export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'bigScreen',
      dll: false,
    }],
  ],
  history: 'hash',
  routes:[{
    path:'/',
    component: '../layouts/layoutSider',
    routes: [{
      path: '/',
      redirect: '/home',
    }, {
      name: '服务保障管控系统',
      path: '/home',
      component: 'Home'
    },{
      name: '服务保障管控系统',
      path: '/list',
      component: 'List'
    },{
      name: '服务保障管控系统',
      path: '/home',
      component: 'Mix'
    }]
  }],
  cssLoaderOptions: {
    localIdentName: '[local]'
  },
  alias: {
    api: resolve(__dirname, './src/api'),
    components: resolve(__dirname, './src/components'),
    utils: resolve(__dirname, './src/utils'),
    assets: resolve(__dirname, './src/assets'),
  }
}
