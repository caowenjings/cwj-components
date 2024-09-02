---
group:
  title: Object
---

# omit

创建一个从 object 中未选中的属性的对象。

```jsx | pure
import { omit } from '@szl/jstools';

const data = { name: '小明', age: 20 };
console.log(omit(data, ['name']));
// => objects for { age: 20 }
```
