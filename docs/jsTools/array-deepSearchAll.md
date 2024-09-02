---
group:
  title: Array
  order: 3
---

# deepSearchAll

`deepSearchAll(data, condition, [childrenKey = 'children'])`

根据条件对树形数据进行搜索，并返回查找到符合条件的所有数据和他的路径

#### 参数

1.`data`(object | array)：要搜索的数据源

2.`condition`(object | function)：搜索的条件

3.`[childrenKey = 'children']`(string)：父子关联字段

#### 返回

`[item, itemPath][]`([T,T[]][])：item 为查找到的数据，itemPath 是数据的路径

```jsx | pure
import { deepSearchAll } from '@szl/jstools';

const list = [
  {
    id: '0',
    name: '0',
  },
  {
    id: '1',
    name: '1',
    children: [
      {
        id: '1-1',
        name: '1-1',
      },
    ],
  },
  {
    id: '2',
    name: '2',
    children: [
      {
        id: '2-1',
        name: '2-1',
      },
    ],
  },
];
const items = deepSearchAll(list, () => data.name.includes('-1')));
console.log(items);
```
