import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// import { useGlobleContext} from '../context'

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleCocktail() {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        console.log(data);
        const { drinks } = data;
        if (drinks) {
          const { idDrink, strDrink, strDrinkThumb, strCategory, strGlass } =
            drinks[0];
          const newDrink = {
            _id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            category: strCategory,
            glass: strGlass,
          };
          setCocktail(newDrink);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h1 className="loading">NO Drink</h1>;
  }
  const { name, category, glass, image } = cocktail;

  return (
    <div className="item-container">
      <div className="item-center">
        <img src={image} alt={name} className="img" />
        <div className="item-info">
          <h1>{name}</h1>
          <h2>{category}</h2>
          <h3>{glass}</h3>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
