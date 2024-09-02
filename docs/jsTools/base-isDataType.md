---
group:
  title: Base
---

# isDataType

工具集用到的一些基本类型判断

## isString

判断是否是字符串

```jsx | pure
import { isString } from 'cwj-jstools';

console.log(isString('小明'));
// => true
```

## isArray

判断是否是数组

```jsx | pure
import { isArray } from 'cwj-jstools';

console.log(isArray([]));
// => true
```

## isDate

判断是否是日期

```jsx | pure
import { isDate } from 'cwj-jstools';

const date = new Date();
console.log(isDate(date));
// => true
```

## isObject

判断是否是普通对象

```jsx | pure
import { isObject } from 'cwj-jstools';

console.log(isObject({ name: '小明' }));
// => true
console.log(isObject([1]));
// => false
```

## isRegExp

判断是否是正则

```jsx | pure
import { isRegExp } from 'cwj-jstools';

console.log(isRegExp(/a-z/));
// => true
```
