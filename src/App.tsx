import { Counter, GenreSelect, Genre, SearchForm } from "./components";

import { useState } from "react";
import { genres } from "./components/GenreSelect/Component/GenreSelect";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>("ALL");

  function onSearch(searchText: string) {
    console.log(searchText);
  }

  function onSelect(genre: Genre) {
    console.log(genre);
    setSelectedGenre(genre);
  }

  return (
    <>
      <h1>Counters</h1>
      <Counter initialValue={0}></Counter>
      <h1>SearchForm</h1>
      <SearchForm initialSearchText="Search" onSearch={onSearch}></SearchForm>
      <h1>GenreSelect</h1>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onSelect}
      ></GenreSelect>
    </>
  );
}

export default App;
