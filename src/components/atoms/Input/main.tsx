import React, { ReactElement } from 'react';
import { StyleProps } from 'types/StyleProps';

type InputProps = {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styleProps?: StyleProps
}

const styles = {
  fontSize: 24,
  color: 'black',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.2px',
  border: '1px solid white',
};

const Input: React.FC<InputProps> = ({
  id, name, value, onChange, styleProps = {},
}): ReactElement<HTMLInputElement> => <input id={id} name={name} value={value} onChange={onChange} style={{ ...styles, ...styleProps }} />;

export default Input;
