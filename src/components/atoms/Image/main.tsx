import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type ImageProps = {
  src: string;
  alt?: string;
  styleProps?: StyleProps
}

const styles = {
  width: '100%',
  height: '100%',
  objectfit: 'cover',
};

const Image: React.FC<ImageProps> = ({
  src, alt, styleProps,
}): ReactElement<HTMLImageElement> => <img src={src} alt={alt} style={{ ...styles, ...styleProps }} />;

export default Image;
