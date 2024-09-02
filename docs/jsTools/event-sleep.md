---
group:
  title: Event
  order: 10
order: 1
---

# sleep

```tsx
import React, { useState, useEffect } from 'react';
import { sleep } from 'cwj-jstools';

export default function () {
  const [str, setStr] = useState<string>('');

  async function init() {
    await sleep(2000);
    setStr('bingo');
  }

  useEffect(() => {
    init();
  }, []);

  return <div>2s后返回：{str}</div>;
}
```
