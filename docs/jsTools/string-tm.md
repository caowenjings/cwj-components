---
group:
  title: String
order: 3
---

# tm

前端显示信息时，往往要对身份证号，手机号，地址等这类敏感信息进行部分隐藏显示。

## tmName

对姓名进行脱敏处理

```jsx | pure
import { tmName } from '@szl/jstools';

console.log(tmName('小明'));
// => 小*
console.log(tmName('韩梅梅'));
// => 韩*梅

console.log(tmName('西门吹雪'));
// => 西**雪

console.log(tmName('奥斯特洛夫斯基'));
// => 奥**洛夫斯基
```

## tmIdCard

对身份证号进行脱敏处理

```jsx | pure
import { tmIdCard } from '@szl/jstools';

console.log(tmIdCard('512328199001012228'));
// => 5123************28
```

## tmPhone

对电话号进行脱敏处理

```jsx | pure
import { tmPhone } from '@szl/jstools';

console.log(tmPhone('13612341234'));
// => 136****1234

console.log(tmPhone('88886666'));
// => 88****66
```

## tmEmail

对邮箱进行脱敏处理

```jsx | pure
import { tmEmail } from '@szl/jstools';

console.log(tmEmail('123456@qq.com'));
// => 123***@qq.com
```
