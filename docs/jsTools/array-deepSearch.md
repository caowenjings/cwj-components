---
group:
  title: Array
  order: 4
---

# deepSearch

`deepSearch(data, condition, [childrenKey = 'children'])`

根据条件对树形数据进行搜索，并返回查找到第一个符合条件的数据和他的路径

#### 参数

1.`data`(object | array)：要搜索的数据源

2.`condition`(object | function)：搜索的条件

3.`[childrenKey = 'children']`(string)：父子关联字段

#### 返回

`[item, itemPath]`([T,T[]])：item 为查找到的数据，itemPath 是数据的路径

```jsx | pure
import { deepSearch } from 'cwj-jstools';

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
const [item1, item1Path] = deepSearch(list, { id: '1-1' });
console.log(item1);
// => object for {id: '1-1',name: '1-1'}
console.log(item1Path);
// => array for [{id: '1',name: '1'}, {id: '1-1', name: '1-1'}]

const [item2, item2Path] = deepSearch(list, (data) => data.id === '2-1', 'children');
console.log(item2);
// => object for {id: '2-1',name: '2-1'}
console.log(item2Path);
// => array for [{id: '2',name: '2'}, {id: '2-1', name: '2-1'}]
```
