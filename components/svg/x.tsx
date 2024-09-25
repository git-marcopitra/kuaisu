import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 1024 1024"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M921 912L601.11 445.745L601.656 446.182L890.084 112H793.699L558.738 384L372.15 112H119.367L418.015 547.31L417.979 547.273L103 912H199.385L460.607 609.382L668.217 912H921ZM333.96 184.727L782.787 839.273H706.407L257.217 184.727H333.96Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
