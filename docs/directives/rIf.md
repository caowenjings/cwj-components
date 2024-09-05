---
order: 5
---

# r-if

`r-if`指令用于在表达式为 false 时移除元素，为 true 时会添加元素并显示。

```tsx
import { rIf } from 'cwj-directives';
import { Button, Switch } from 'antd';
import { sessionCache } from 'cwj-jstools';
import React, { useState } from 'react';

export default () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div>
      <div style={{ padding: '1rem 0' }}>
        <Switch checkedChildren="显示" unCheckedChildren="隐藏" checked={show} onChange={setShow} />
      </div>
      <Button r-if={show}> 添加条件</Button>
    </div>
  );
};
```
