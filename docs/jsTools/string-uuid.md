---
group:
  title: String
  order: 2
order: 1
---

# uuid

uuid 是一种由算法生成的二进制长度为 128 位的数字标识符。uuid 的格式为“xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”，其中的 x 是 0-9 或 a-f 范围内的一个 32 位十六进制数。

```jsx | pure
import { uuid } from 'cwj-jstools';

console.log(uuid());
// => 9d8eabe1-e8a6-4f1c-a1b2-e66abd159add

console.log(uuid());
// => 4df38d26-5d67-496b-a992-ccfb896753ad
```
