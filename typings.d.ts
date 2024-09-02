/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.css';
declare module '*.less';

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare module '*.png' {
  const src: string;
  export default src;
}

interface Window {
  __POWERED_BY_QIANKUN__?: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  __QIANKUN_DEVELOPMENT__?: boolean;
  Zone?: CallableFunction;
}
