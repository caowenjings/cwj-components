import React from 'react';

import { Empty } from 'antd';

import expired from './image/expired.png';
import noData from './image/no-data.png';
import noWork from './image/no-network.png';
import simple from './image/simple.png';

interface EmptyDataProps {
  description?: string;
  type?: EmptyType;
}

export enum EmptyType {
  SIMPLE,
  NO_DATA,
  NO_NETWORK,
  EXPIRED,
}

export default function EmptyData(props: EmptyDataProps) {
  const { type = EmptyType.SIMPLE, description = '暂无数据' } = props;

  if (type === EmptyType.NO_DATA) {
    return <Empty image={noData} description="" imageStyle={{ height: 252 }} />;
  }

  if (type === EmptyType.NO_NETWORK) {
    return <Empty image={noWork} description="" imageStyle={{ height: 252 }} />;
  }
  if (type === EmptyType.EXPIRED) {
    return <Empty image={expired} description="" imageStyle={{ height: 252 }} />;
  }
  return (
    <Empty
      image={simple}
      description={<span style={{ color: '#999' }}>{description}</span>}
      imageStyle={{ height: 60 }}
    />
  );
}
