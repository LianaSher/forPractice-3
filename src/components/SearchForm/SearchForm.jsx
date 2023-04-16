import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  const onInput = e => setRegion(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!region) {
      return alert('Please, select the region!');
    }
    onSubmit(region);
    setRegion('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        defaultValue="default"
        onChange={onInput}
      >
        <option value="default" disabled>
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
