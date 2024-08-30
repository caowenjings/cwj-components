---
nav:
  title: 组件
  order: 2
  path: /components
---

# ThemeProvider 主题配置

## 介绍

为组件提供统一的全局化主题配置

## 安装

通过 npm：

```jsx | pure
npm i @ cwj/components -f
```

## 使用

ThemeProvider 使用 react 的 context 特性，只需要在 🎦 外围包裹一次即可全局生效

```jsx
// import { ThemeProvider } from '@cwj/components';

// export default () => {
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>;
// };
```

## 使用动态主题

使用的是 css Variable 修改全局主题色的方案
