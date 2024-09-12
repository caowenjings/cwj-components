---
group:
  title: Window
  order: 10
order: 1
---

# scroll

浏览器的滚动操作，`scrollToTop` 滚动到顶部， `scrollToElement` 某个元素滚动到顶部

```tsx
import React, { useState, useRef } from 'react';
import { Button, Space } from 'antd';
import { scrollToTop, scrollToElement } from 'cwj-jstools';

export default () => {
  const ref = useRef();
  return (
    <div ref={ref}>
      <div style={{ height: '1200px' }}> </div>
      <Space>
        <Button onClick={() => scrollToTop()}>滚动到顶部</Button>
        <Button onClick={() => scrollToElement(ref.current)}>某个元素滚动到顶部</Button>
      </Space>
    </div>
  );
};
```
