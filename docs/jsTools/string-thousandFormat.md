---
group:
  title: String
order: 5
---

# thousandFormat

`thousandFormat(num, [fixed], [symbol])`

将数值或字符串格式化为千分位字符串

#### 参数

1.`num` (number | string)：要格式化的数据

2.`[fixed = 2]`(number)：保留小数位数

3.`[symbol = ',']`(string)：分割的符号

```jsx | pure
import { thousandFormat } from '@szl/jstools';

let num = 123456789;
console.log(thousandFormat(num));
// => '123,456,789.00'

let str = '100000000000';
console.log(thousandFormat(str));
// => '100,000,000,000.00'
```
