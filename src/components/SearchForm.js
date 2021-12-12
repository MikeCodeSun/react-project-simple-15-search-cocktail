import React, { useRef } from "react";
import { useGlobleContext } from "../context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobleContext();

  const searchValue = useRef("");
  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-row">
          <label className="form-label">Search Cocktails</label>
          <input
            type="text"
            className="form-input"
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </div>
  );
}
