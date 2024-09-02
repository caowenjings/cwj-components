---
group:
  title: Base
---

# clone

深拷贝，修改拷贝后的数据并不会影响原始数据

```jsx | pure
import { clone } from '@szl/jstools';

const obj1 = { name: '小敏' };
const obj2 = clone(obj1);
console.log(obj2);
// => object for {name: '小敏'}

const arr1 = [{ name: '小明' }];
const arr2 = clone(arr1);
arr2[0].name = '小丽';
console.log(arr1);
// => array for [{name: '小明'}]
console.log(arr2);
// => array for [{name: '小丽'}]
```
