---
order: 7
---

# r-permission

`r-permission`基于`行数的权限管理`，废弃之前的插槽的方式，改为直接作用于元素上，逻辑清晰，代码简洁。

<!-- ```tsx
import '@szl/directives';
import { Button, Space } from 'antd';
import { sessionCache } from 'cwj-jstools';
import React from 'react';

export default () => {
  const baseInfo: any = {
    id: '1',
    permissions: ['algorithm:auto-modeling:*', 'algorithm:assessment-task:view'],
  };

  const allBaseInfo: any = {
    id: '1',
    permissions: ['*:*'],
  };

  function setPermission() {
    sessionCache.setItem('baseInfo', baseInfo, true);
    window.location.reload();
  }

  function setAllPermission() {
    sessionCache.setItem('baseInfo', allBaseInfo, true);
    window.location.reload();
  }

  function clearPermission() {
    sessionCache.clear();
    window.location.reload();
  }
  return (
    <>
      <div style={{ padding: '1rem 0' }}>
        <Space direction={'vertical'}>
          <Button onClick={() => setPermission()}>点击添加baseInfo</Button>
          <Button onClick={() => setAllPermission()}>点击添加所有权限</Button>
          <Button onClick={() => clearPermission()}>清除session</Button>
        </Space>
      </div>
      <div>
        <Space direction={'horizontal'} style={{ padding: '1rem 0' }}>
          <Button type={'primary'} r-permission={'auto-modeling:create'}>
            自动建模创建
          </Button>
          <Button type={'primary'} r-permission={'online-service:*'}>
            在线服务
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:create'}>
            任务创建
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:view'}>
            任务查看
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:view'}>
            简化任务查看
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:v'}>
            简化版任务查看
          </Button>
        </Space>
      </div>
    </>
  );
};
``` -->
