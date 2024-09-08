import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cwj-components',
  description: '每天进步一点点',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: { type: 'hash' }, // 采用hash模式刷新路由不会丢失
  base: '/cwj-compontents/', // 路径名
  publicPath: process?.env?.NODE_ENV === 'development' ? '/cwj-components/' : './',
  exportStatic: {}, // 将所有路由输出为html，以免刷新时404
  lessLoader: { javascriptEnabled: true },
  //  按需加载 antd
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd', //配置antd全局样式
  //       libraryDirectory: 'es',
  //       style: true,
  //     },
  //   ],
  // ],
});
