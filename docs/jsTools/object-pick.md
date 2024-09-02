---
group:
  title: Object
---

# pick

创建一个从 object 中选中的属性的对象。

```jsx | pure
import { pick } from 'cwj-jstools';

const data = { name: '小明', age: 20 };
console.log(pick(data, ['name']));
// => objects for { name: '小明' }
```
