---
group:
  title: Array
  order: 5
---

# uniqBy

`uniqBy(list, key)`

根据 key 对数组进行去重处理

#### 参数

1.`data`(array)：数据源

2.`key`([string])：key

```jsx | pure
import { uniqBy } from '@szl/jstools';

const list = [
  { value: '1', label: '1' },
  { value: '1', label: '1' },
  { value: '2', label: '1' },
];
const list2 = [1, 1, 1, 12, 2, 2, 3, 3, 3, 4];

const uList = uniqBy(list, 'value');
console.log(uList);
// => array for [ { value: '1', label: '1' },{ value: '2', label: '1' }]

const uList2 = uniqBy(list2);
console.log(uList2);
// => array for [1, 12, 2, 3, 4]
```
