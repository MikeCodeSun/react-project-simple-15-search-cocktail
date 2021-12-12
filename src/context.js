import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;
      // console.log(data);
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb } = item;
          return { id: idDrink, name: strDrink, image: strDrinkThumb };
        });
        setCocktailList(newDrinks);
        setLoading(false);
      } else {
        setCocktailList([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        cocktailList,
        loading,
        searchTerm,
        setLoading,
        setCocktailList,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobleContext = () => {
  return useContext(AppContext);
};
