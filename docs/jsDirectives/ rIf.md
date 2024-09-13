<!-- ---
order: 5
---

# r-if

`r-if`指令用于在表达式为 false 时移除元素，为 true 时会添加元素并显示。

```tsx
import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { rIf } from 'cwj-directives';

export default () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <Space direction={'vertical'}>
      <Switch checkedChildren="显示" unCheckedChildren="隐藏" checked={show} onChange={setShow} />
      <Button r-if={show}> 添加条件</Button>
    </Space>
  );
};
``` -->
