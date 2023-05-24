// Search.js

import React, { useState } from 'react';

import './main.css';
import { useTranslation } from 'react-i18next';

function Search({ handleSearch }) {
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <div className="container search">
      <div className="row">
        <div className="col-lg-3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={t("weather.input")}
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-success"
                type="submit"
                style={{ backgroundColor: '#25a569' }}
              >
                {t("weather.search")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
