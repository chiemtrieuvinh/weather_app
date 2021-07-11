import React from 'react';
import Input from 'components/atoms/Input/main';
import FlexBox from 'components/atoms/FlexBox/main';

type SearchInputProps = {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styleProps?: { [name: string]: string | number }
}

const SearchInput: React.FC<SearchInputProps> = ({
  id, name, value, onChange, styleProps = {},
}) => (
  <FlexBox alignItems="flex-end" justifyContent="center">
    <i className="fa fa-search" style={{ fontSize: 20, color: 'white', marginRight: 7.5 }} />
    <Input id={id} name={name} value={value} onChange={onChange} styleProps={styleProps} />
  </FlexBox>
);
export default SearchInput;
