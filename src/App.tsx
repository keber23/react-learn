import Counter from "./components/Counter";
import Search from "./components/SearchForm";
import Genre from "./components/GenreSelect";
import { useState } from "react";

function App() {
  const [selectedGenre1, setSelectedGenre1] = useState("Comedy");
  const [selectedGenre2, setSelectedGenre2] = useState("Western");

  function onSearch(searchText: string) {
    console.log(searchText);
  }

  function onSelect1(genre: string) {
    console.log(genre);
    setSelectedGenre1(genre);
  }

  function onSelect2(genre: string) {
    console.log(genre);
    setSelectedGenre2(genre);
  }

  return (
    <>
      <h1>Counters</h1>
      <Counter initialValue={0}></Counter>
      <Counter initialValue={10}></Counter>
      <h1>SearchForm</h1>
      <Search initialSearchText="Search" onSearch={onSearch}></Search>
      <h1>GenreSelect</h1>
      <Genre
        genres={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
        selectedGenre={selectedGenre1}
        onSelect={onSelect1}
      ></Genre>
    </>
  );
}

export default App;
