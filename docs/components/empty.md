<!-- ---
order: 11
---

# Empty 空状态

空状态时的展示占位图。

### simple 模式

```tsx
/**
 * title: 基本
 * description: 类型为EmptyType.SIMPLE，可以设置描述文字
 */
import React, { useState } from 'react';
import { EmptyData } from '@cwj/components';
// import { EmptyData } from '../../src/empty';

export default () => {
  return (
    <div>
      <EmptyData />
    </div>
  );
};
```

### 空数据

```tsx
/**
 * title: 缺省页--空数据
 * description: 类型为EmptyType.NO_DATA
 */
import React, { useState } from 'react';
import { Button, Space, Input } from 'antd';
import { EmptyData } from '@cwj/components';
// import { EmptyType } from '@cwj/components/empty';
// import { EmptyData, EmptyType } from '../../src/empty';

export default () => {
  return (
    <div>
      <EmptyData type={EmptyType.NO_DATA} />
    </div>
  );
};
```

### 无网络

```tsx
/**
 * title: 缺省页--无网络
 * description: 类型为EmptyType.NO_NETWORK
 */
import React, { useState } from 'react';
import { Button, Space, Input } from 'antd';
import { EmptyData } from '@cwj/components';
import { EmptyType } from '@cwj/components/empty';
// import { EmptyData, EmptyType } from '../../src/empty';

export default () => {
  return (
    <div>
      <EmptyData type={EmptyType.NO_NETWORK} />
    </div>
  );
};
```

### 已过期

```tsx
/**
 * title: 缺省页--已过期
 * description: 类型为EmptyType.EXPIRED
 */
import React, { useState } from 'react';
import { Button, Space, Input } from 'antd';
import { EmptyData } from '@cwj/components';
import { EmptyType } from '@cwj/components/empty';
// import { EmptyData, EmptyType } from '../../src/empty';

export default () => {
  return (
    <div>
      <EmptyData type={EmptyType.EXPIRED} />
    </div>
  );
};
```

### API

| 名称        |                   说明                   |        类型 | 默认值           |
| ----------- | :--------------------------------------: | ----------: | ---------------- |
| description | 描述，在 type 为 EmptyType.SIMPLE 时生效 |    `string` | 暂无数据         |
| type        |                   类型                   | `EmptyType` | EmptyType.SIMPLE |

```

``` -->
