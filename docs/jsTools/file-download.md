---
group:
  title: File
  order: 9
order: 1
---

# streamDownload

`streamDownload(data, [name], [type])`

流文件下载。

#### 参数

1.`data`(blob)：要下载的文件

2.`[name]`(string)：文件的名字

3.`[type]`(string)：文件的类型

```jsx | pure
import { streamDownload } from 'cwj-jstools';

xhr.get('/xxxx').then((res) => {
  streamDownload(res.data, 'test.pdf');
});
```
