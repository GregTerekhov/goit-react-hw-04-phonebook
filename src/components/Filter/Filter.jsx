import React from 'react';
import PropTypes from 'prop-types';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          type="text"
          placeholder="Please enter name..."
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
