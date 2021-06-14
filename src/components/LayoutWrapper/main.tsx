import { JSXElement } from '@babel/types';
import React, { ReactNode } from 'react';

const LayoutWrapper: React.FC<{
  children: ReactNode
}
> = ({ children }) => (
  <div className="Wrapper">
    {children}
  </div>
);

export default LayoutWrapper;
