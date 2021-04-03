import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByFieldAction } from '../../actions';
import DropdownIcon from '../../../assets/dropdown.svg';
import { filterItems } from '../../../mocksData/filterBy';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const [optionsState, setOptionsState] = useState(filterItems[0]);
  const [showAllOptions, setShowAllOptions] = useState(false);

  const handleChange = (event) => {
    setOptionsState(event.target.value);
    setShowAllOptions(false);
    dispatch(sortByFieldAction(event.target.value));
  }

  const handleShowAllOptions = (event) => {
    event.preventDefault();

    setShowAllOptions(true);
  }

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
