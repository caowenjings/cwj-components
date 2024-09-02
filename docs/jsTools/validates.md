---
group:
  title: Validators
  order: 5
---

# validators

常用的一些验证

## isEmail

判断是否是邮箱

```jsx | pure
import { isEmail } from '@szl/jstools';

console.log(isEmail('zhangsan-001@gmail.com'));
// => true
```

## isIdCard

判断是否是身份证号

```jsx | pure
import { isIdCard } from '@szl/jstools';

console.log(isIdCard('11010519491231002X'));
// => true

console.log(isIdCard('01010519491231002X'));
// => false
```

## isMobilePhone

判断是否是手机号

```jsx | pure
import { isMobilePhone } from '@szl/jstools';

console.log(isMobilePhone('13612345678'));
// => false

console.log(isMobilePhone('03612345678'));
// => false
```

## isTelePhone

判断是否是座机号

```jsx | pure
import { isTelePhone } from '@szl/jstools';

console.log(isTelePhone('1234567'));
// => true

console.log(isTelePhone('023-1234567'));
// => true

console.log(isTelePhone('0231-12345678'));
// => true

console.log(isTelePhone('02345-12345678'));
// => false
```

## isIp

判断是否是 IP

```jsx | pure
import { isIp } from '@szl/jstools';

console.log(isIp('192.168.2.104'));
// => true
```

## isPort

判断是否是端口

```jsx | pure
import { isPort } from '@szl/jstools';

console.log(isPort('65535'));
// => true

console.log(isPort('0'));
// => true
```
