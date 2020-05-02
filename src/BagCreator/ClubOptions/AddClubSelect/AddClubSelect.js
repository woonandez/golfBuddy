import React from 'react';
import './AddClubSelect.css';

function AddClubSelect({
  createNewClub,
  newClub,
  brands,
  clubNumbers }) {

  function addNewClub() {
    if (newClub.type && newClub.brand) {
      return createNewClub(newClub.type, newClub.brand);
    }
  };

  return (
    <div>
      <label>Woods</label>
      <select className="woods" name="type">
        {
          clubNumbers.map((number, key) => {
            return (
              <option value={number} key={key}>{number}</option>
            )
          })
        }
      </select>
      <select className="woods" name="brand">
        {
          brands.map((brand, key) => {
            return (
              <option value={brand} key={key}>{brand}</option>
            )
          })
        }
      </select>

      <button onClick={addNewClub}>Add Wood</button>
    </div>
  )
};

export default AddClubSelect;