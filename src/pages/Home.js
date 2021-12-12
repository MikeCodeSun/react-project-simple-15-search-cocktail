import React from "react";
import CocktailList from "../components/CocktailList";
// import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
// import { useGlobleContext } from "../context";

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
