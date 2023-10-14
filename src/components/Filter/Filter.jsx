import React from 'react';
import { FilterCont } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectorFilter } from 'redux/selectors';

const Filter = () => {
  const { filter } = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <FilterCont>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="^[^\d]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterCont>
  );
};

export default Filter;