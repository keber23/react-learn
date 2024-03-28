import { useSearchParams } from "react-router-dom";
import SearchForm from "../SearchForm/Component/SearchForm";
import styles from "../../pages/MovieListPage/Styles/MovieListPage.module.css";

export default function SearchFormWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  let searchQuery = queryParams.query || "";

  const onSearch = (searchText: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("query", searchText);
      return searchParams;
    });
  };

  return (
    <section className={styles.movieSearchContainer}>
      <h1>FIND YOUR MOVIE</h1>
      <SearchForm initialSearchText={searchQuery} onSearch={onSearch} />
    </section>
  );
}
