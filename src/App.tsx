import "./App.css";
import Counter from "./components/Counter";
import Search from "./components/Search";
import Genre from "./components/Genre";

function App() {
  function onSearch(searchText: string) {
    console.log(searchText);
  }

  return (
    <>
      <h1>Counters</h1>
      <Counter initialValue={0}></Counter>
      <Counter initialValue={10}></Counter>
      <h1>SearchForm</h1>
      <Search intitialSearchText="Search" onSearch={onSearch}></Search>
      <Search intitialSearchText="test" onSearch={onSearch}></Search>
      <h1>GenreSelect</h1>
      <Genre
        genres={["Action", "Comedy", "Romance"]}
        selectedGenre="Comedy"
        onSelect={(genre) => console.log(genre)}
      ></Genre>
      <Genre
        genres={["Thriller", "Crime", "Western"]}
        selectedGenre="Western"
        onSelect={(genre) => console.log(genre)}
      ></Genre>
    </>
  );
}

export default App;
