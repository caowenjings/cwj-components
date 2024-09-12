---
group:
  title: Window
  order: 10
order: 1
---

# copyText

```tsx
import React, { useState, useRef } from 'react';
import { Button, Input, message } from 'antd';
import { copyText } from 'cwj-jstools';

export default () => {
  const ref = useRef();

  function copy() {
    const value = ref.current.input.value;
    if (value) {
      copyText(value);
      ref.current.input.select();
      message.success('复制成功');
    }
  }

  return (
    <Input.Group compact>
      <Input ref={ref} />
      <Button onClick={copy}>复制</Button>
    </Input.Group>
  );
};
```
