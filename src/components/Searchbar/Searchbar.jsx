import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from '../SearchForm';
import './Searchbar.styles.scss';

const Searchbar = ({onSubmit}) => (
  <header className="Searchbar">
    <SearchForm onSubmit={onSubmit}/>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default Searchbar;
