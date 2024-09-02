---
group:
  title: String
order: 2
---

# parseUrlParams

解析 url 中的参数，得到对象形式 key:value

```jsx | pure
import { parseUrlParams } from 'cwj-jstools';
console.log(
  parseUrlParams(
    'https://www.baidu.com/?username=zhangsan&id=888&id=666&city=%E5%8C%97%E4%BA%AC&checked',
  ),
);
// => objects for {checked: undefined,city: '北京',id: [888, 666],username: 'zhangsan'}
```
