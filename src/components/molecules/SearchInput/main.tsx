import React from 'react';
import Input from 'components/atoms/Input/main';
import FlexBox from 'components/atoms/FlexBox/main';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

type SearchInputProps = {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  callBack?: () => void;
  styleProps?: { [name: string]: string | number }
}

const SearchInput: React.FC<SearchInputProps> = ({
  id, name, value, onChange, styleProps = {}, callBack,
}) => (
  <Form.Group as={Row} controlId="formSearch">
    <div className="d-flex align-items-flex-end justify-content-center w-20">
      <InputGroup>
        <InputGroup.Prepend>
          <Button role="searchButton" variant="link" onClick={() => { callBack && callBack(); }}><i className="fa fa-search" style={{ fontSize: 20, color: 'white' }} /></Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          onChange={onChange}
          role="searchInput"
          style={{
            color: 'white',
            borderTop: '0px',
            borderRight: '0px',
            borderLeft: '0px',
            borderBottom: '3px solid white',
            backgroundColor: 'transparent',
          }}
        />
      </InputGroup>
    </div>
  </Form.Group>
);
export default SearchInput;
