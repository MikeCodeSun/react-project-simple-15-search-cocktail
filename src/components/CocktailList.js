import React from "react";
import { Link } from "react-router-dom";
import { useGlobleContext } from "../context";

import Loading from "./Loading";

export default function CocktailList() {
  const { loading, cocktailList } = useGlobleContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktailList.length === 0) {
    return <h1 className="loading">Nothing Matched</h1>;
  }

  return (
    <div className="cocklist">
      <h1>cocktail list</h1>
      <div className="cocklist-container">
        {cocktailList.map((item) => {
          const { id, name, image } = item;
          return (
            <article className="single-cocktail" key={id}>
              <img src={image} alt={name} className="img" />
              <div className="cocktail-info">
                <h2>{name}</h2>
                <Link to={`/cocktail/${id}`} className="btn">
                  detail
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
