import { defineConfig } from 'dumi';

export default defineConfig({
  title: '静',
  description: '每天进步一点点',
  base: '/cwj-compontents-docs/', // 路径名
  hash: true,
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  history: { type: 'hash' }, // 采用hash模式刷新路由不会丢失
  outputPath: 'build',
  publicPath: process?.env?.NODE_ENV === 'production' ? 'cwj-components-docs' : '/',
  runtimePublicPath: true,
  mode: 'site',
  //  按需加载 antd
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  lessLoader: { javascriptEnabled: true },
});
