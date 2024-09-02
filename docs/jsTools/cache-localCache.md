---
group:
  title: Cache
  order: 5
---

# localCache

通过 localStorage 把数据保存在浏览器中，在原有的基础上对存入的数据进行统一处理，不需要用户对存入数据格式的单独处理。同时增加了过期时间的功能

```jsx | pure
import { localCache } from '@szl/jstools';

localCache.setItem('info', { id: 1, age: 10 }, true, 2000); // 2s后过期
console.log(localCache.getItem('info', true));
// => object for { id: 1, age: 10 }

setTimeout(() => {
  console.log(localCache.getItem('info', true));
  // => null
}, 3000);
```

#### localCacheInstance

| 名称 | 说明 | 类型 |
| --- | :-: | --: |
| setItem | 增加一个键值对到 localStorage 中 | `(key: string, value: any, isStringify?: boolean, expires?: number) => void` |
| getItem | 从 localStorage 中查询指定 key 的值 | `(key: string, isParse?: boolean) => any \| null` |
| removeItem | 从 localStorage 中删除指定的键值对 | `(key: string) => void` |
| clear | 清空 localStorage 中所有键值对 | `() => void` |
| key | 传入一个数字 n，用于返回指定第 n 个键的名字 | `(index: number) => string \| null` |
| length | 返回 localStorage 中的键值对的数目 | `() => number` |
