import React from 'react';
import { StyleProps } from 'types/StyleProps';

type TText = {
  size?: number
  color?: string
  bold?: boolean
  className?: string,
  styleProps?: StyleProps,
  children: React.ReactNode
}
const Text: React.FC<TText> = ({
  children, size = 16, color = 'black', bold, styleProps, className,
}) => (
  <span
    style={{
      fontSize: size,
      color,
      fontFamily: 'inherit',
      fontWeight: bold ? 'bold' : 'normal',
      ...styleProps,
    }}
    className={className}
  >
    {children}
  </span>
);

export default Text;
