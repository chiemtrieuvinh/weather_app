import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type FlexProps = {
  children: React.ReactNode,
  styleProps?: StyleProps,
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
}
const styles = {
  display: 'flex',
};

const FlexWrapper: React.FC<FlexProps> = ({
  children, styleProps, flexDirection, alignItems, justifyContent,
}): ReactElement<HTMLDivElement> => {
  const defaultFlex = {
    ...styles,
    flexDirection: flexDirection || 'row',
    alignItems: alignItems || 'flex-start',
    justifyContent: justifyContent || 'flex-start',
  };
  return (
    <div style={{ ...defaultFlex, ...styleProps }}>{children}</div>
  );
};

export default FlexWrapper;
