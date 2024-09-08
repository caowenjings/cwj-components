---
order: 2
---

# defineDirective

`defineDirective`根据自己的需求，注册指令。例如注册一个功能权限指令：auth

```tsx
import React, { useState, useEffect } from 'react';
import { Button, Space, Checkbox } from 'antd';
import { defineDirective, DirectiveInstallProps } from 'cwj-directives';
import { sessionCache } from 'cwj-jstools';

defineDirective('auth', {
  install(data: DirectiveInstallProps) {
    const funcIds = sessionCache.getItem('funcIds', true);
    if (!funcIds?.includes(data.value)) {
      return null;
    }
  },
});

export default () => {
  const [funcIds, setFuncIds] = useState([]);
  const options = [
    { label: '新增权限', value: '100001' },
    { label: '编辑权限', value: '100002' },
    { label: '删除权限', value: '100003' },
  ];

  useEffect(() => {
    const funcIds = sessionCache.getItem('funcIds', true);
    setFuncIds(funcIds);
  }, []);

  function changeFuncIds(value: string[]) {
    setFuncIds(value);
    sessionCache.setItem('funcIds', value, true);
  }

  console.log(funcIds);

  return (
    <Space direction={'vertical'}>
      <Checkbox.Group options={options} value={funcIds} onChange={changeFuncIds} />
      <Button r-auth={'100001'}> 新增</Button>
      <Button r-auth={'100002'}> 编辑</Button>
      <Button r-auth={'100003'}> 删除</Button>
    </Space>
  );
};
```
