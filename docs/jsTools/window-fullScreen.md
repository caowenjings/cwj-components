---
group:
  title: Window
  order: 10
order: 1
---

# fullscreen

浏览器全屏操作，`launchFullscreen` 全屏 `exitFullscreen` 退出全屏

```tsx
import React, { useState, useRef } from 'react';
import { Button, Space } from 'antd';
import { launchFullscreen, exitFullscreen } from 'cwj-jstools';

export default () => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <div style={{ height: '1200px' }}> </div>
      <Space>
        <Button onClick={() => launchFullscreen()}>全屏</Button>
        <Button onClick={() => launchFullscreen(ref.current)}>局部全屏</Button>
        <Button onClick={() => exitFullscreen(ref.current)}>退出全屏</Button>
      </Space>
    </div>
  );
};
```
