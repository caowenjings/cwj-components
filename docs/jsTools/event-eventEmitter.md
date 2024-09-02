---
group:
  title: Event
  order: 10
order: 1
---

# eventEmitter

发布订阅模式是一种常用的设计模式，它定义了一种一对多的关系，让多个订阅者对象同时监听某一个主题对象，当主题对象发生变化时，它会通知所有订阅者对象，使它们能够自动更新。

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Space, Input, InputNumber } from 'antd';
import { eventEmitter } from 'cwj-jstools';

export default function () {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  function updateUser(name: string, age: number) {
    setName(name);
    setAge(age);
  }

  useEffect(() => {
    eventEmitter.on('getInfo', updateUser);
    return () => {
      eventEmitter.off('getInfo', updateUser);
    };
  }, []);

  function publish() {
    eventEmitter.emit('getInfo', nameRef.current.input.value, ageRef.current.value);
  }

  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <Space>
        <Input placeholder="name" ref={nameRef} />
        <InputNumber placeholder="age" min={1} max={100} ref={ageRef} />
        <Button type="primary" onClick={() => publish()}>
          发布
        </Button>
      </Space>
    </div>
  );
}
```

#### eventEmitterInstance

| 名称 | 说明 | 类型 |
| --- | :-: | --: |
| on | 安装事件监听器，它接受目标事件名和回调函数作为参数 | `(eventName: string, cb: Function) => void` |
| onLatest | 监听最新的变化 | `(eventName: string, cb: Function) => void` |
| emit | 触发目标事件，它接受事件名和监听函数入参作为参数 | `(eventName: string, ...args: any) => void` |
| off | 移除某个事件回调队列里的指定回调函数 | `(eventName: string, cb: Function) => void` |
| once | 为事件注册单次监听器 | `(eventName: string, cb: Function) => void` |
