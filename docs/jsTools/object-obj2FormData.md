---
group:
  title: Object
---

# obj2FormData

将 object 转换成 formData

```jsx | pure
import { obj2FormData } from '@szl/jstools';

const formData = obj2FormData({ name: '小明', age: 20 });
console.log(formData.get('name'));
// => 小明
console.log(formData.get('age'));
// => 20
```
