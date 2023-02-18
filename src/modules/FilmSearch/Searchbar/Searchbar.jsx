import PropTypes from 'prop-types';

import { Formik } from 'formik';

import {
  SearchBar,
  SearchForma,
  Input,
  Button,
  ButtonLabel,
} from './Searchbar.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = search => {
    if (search.search === '') {
      return;
    }
    onSubmit(search);
  };
  return (
    <SearchBar>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForma>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
        </SearchForma>
      </Formik>
    </SearchBar>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
