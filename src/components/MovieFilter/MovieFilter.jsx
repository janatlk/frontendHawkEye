import React from 'react';
import './checker.css'

const MovieFilter = ({ filter, setFilter }) => {
  const handleToggleFilter = (e) => {
    setFilter(e.target.checked ? 'watched' : 'notWatched');
  };

  return (
    <div className={'flex'}>
        <div className={'n'}>Not watched</div>
      <input
        type="checkbox"
        id="checkboxInput"
        checked={filter === 'watched'}
        onChange={handleToggleFilter}
      />
      <label htmlFor="checkboxInput" className={'toggleSwitch'}></label>
        <div className={'n'}>Watched</div>
    </div>
  );
};

export default MovieFilter;
