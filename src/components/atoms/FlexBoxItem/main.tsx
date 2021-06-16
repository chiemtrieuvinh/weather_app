import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type FlexBoxItemProps = {
  children: React.ReactNode
  grow?: number
  shrink?: number
  basis?: string
  marginLeft?: string
  marginRight?: string
  width?: string
  margin?: string
  minWidth?: string
  styleProps?: StyleProps;

}
const FlexBoxItem: React.FC<FlexBoxItemProps> = ({
  children, grow = 1, shrink = 1, basis = 1, marginLeft, marginRight, width, margin, minWidth, styleProps,
}): ReactElement<HTMLDivElement> => {
  const defaultStyle = {
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    marginLeft,
    width,
    marginRight,
    margin,
    minWidth,
    ...styleProps,
  };
  return (
    <div style={{ ...defaultStyle }}>
      {children}
    </div>
  );
};

export default FlexBoxItem;
