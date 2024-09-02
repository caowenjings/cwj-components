---
group:
  title: File
  order: 9
order: 2
---

# html2Pdf

`html2Pdf(dom, name)`

把 html 转换为 pdf 并下载。

#### 参数

1.`dom`：HTMLElement

2.`name`(string)：文件的名字

```jsx
import React from 'react';
import { Button } from 'antd';
import { html2Pdf } from '@szl/jstools';

export default function () {
  function download() {
    html2Pdf(document.body, 'body');
  }

  function exportPdf() {
    html2Pdf(document.getElementById('test'), 'test');
  }

  return (
    <div>
      <div id="test">请把我转成pdf</div>
      <Button type="primary" onClick={download}>
        把页面转成pdf
      </Button>
      <Button type="primary" onClick={exportPdf}>
        把id为test转成pdf
      </Button>
    </div>
  );
}
```
