import React, { useEffect, useState } from 'react';
import DropdownIcon from '../../../assets/dropdown.svg';
import { filterItems } from '../../../mocksData/filterBy';
import './Filter.css';

export default function Filter() {
  const [optionsState, setOptionsState] = useState(filterItems[0]);
  const [showAllOptions, setShowAllOptions] = useState(false);

  const handleChange = (event) => {
    console.log('value:', event.target.value);
    setOptionsState(event.target.value);
    setShowAllOptions(false);
  }

  const handleShowAllOptions = (event) => {
    event.preventDefault();

    setShowAllOptions(true);
  }

  /* useEffect(() => {
    setOptionsState(optionsState);
  }, [optionsState]); */

  return (
    <div className="sort-wrap">
      <div className="input-select">
        <div className="filter-wrap">
          <button type="button" className="filter-select" onClick={handleShowAllOptions}>
            {optionsState}
            <DropdownIcon />
          </button>
            { showAllOptions && <div className="options-wrap">
              {
                filterItems.map(el => {
                  if (el !== optionsState) {
                    return <button key={el} value={el} type="button" className="filter-select-btn" onClick={handleChange}>
                    {el}</button>
                  } 
                })
              }
            </div> 
          }
        </div>
      </div>
  </div>
  )
}
