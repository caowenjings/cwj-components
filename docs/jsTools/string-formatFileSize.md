---
group:
  title: String
order: 6
---

# formatFileSize

`formatFileSize(fileSize, [decimal], [unit])`

格式化文件大小，将字节为单位的大小拼上单位

#### 参数

1.`fileSize` (number)：文件大小，单位默认是 unit 单位数组第一个

2.`[decimal = 0]`(number)：保留的小数位数

3.`[unit = ["Bytes", "KB", "MB", "GB", "TB"]]`(string[])：格式化的单位数组，按从小到大的顺序

```jsx | pure
import { formatFileSize } from 'cwj-jstools';

const num = 1000;
const num1 = 2048;
const num2 = 1048576;

console.log(formatFileSize(num));
// => '1000Bytes'

console.log(formatFileSize(num1));
// => '2KB'

console.log(formatFileSize(num1, 2, ['KB', 'MB', 'GB', 'TB']));
// => '2.00MB'

console.log(formatFileSize(num2));
// => '1MB'
```
