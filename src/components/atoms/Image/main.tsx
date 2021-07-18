import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type ImageProps = {
  src: string;
  alt?: string;
  styleProps?: StyleProps
  role?: string
}

const styles = {
  width: '100%',
  height: '100%',
  objectfit: 'cover',
};

const Image: React.FC<ImageProps> = ({
  src, alt, styleProps, role = 'image-value',
}): ReactElement<HTMLImageElement> => <img role={role} src={src} alt={alt} style={{ ...styles, ...styleProps }} />;

export default Image;
