import React from 'react';
import './Filter.scss';

const Filter = (props) => {
const { numberResults } = props;

  return (
    <div className="filter">
      <div className="filter__select">
        <span>Filtre por:</span>
        <button> Cor </button>
      </div>
      <span className="filter__results">{`${numberResults} itens encontrados`}</span>
    </div>
  );
};

export default Filter;