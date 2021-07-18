import React from 'react';
import { StyleProps } from 'types/StyleProps';

type TText = {
  size?: number
  color?: string
  bold?: boolean
  className?: string,
  styleProps?: StyleProps,
  children: React.ReactNode,
  role?: string
}
const Text: React.FC<TText> = ({
  children, color = 'black', bold, styleProps, className, role = 'text-value',
}) => (
  <div
    role={role}
    style={{
      color,
      fontFamily: 'inherit',
      fontWeight: bold ? 'bold' : 'normal',
      ...styleProps,
    }}
    className={className}
  >
    {children}
  </div>
);

export default Text;
