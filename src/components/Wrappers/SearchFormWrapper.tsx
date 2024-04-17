import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import SearchForm from "../SearchForm/Component/SearchForm";
import styles from "../../pages/MovieListPage/Styles/MovieListPage.module.css";

export default function SearchFormWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  let searchQuery = queryParams.query || "";
  const navigate = useNavigate();

  const onSearch = (searchText: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("query", searchText);
      return searchParams;
    });
  };

  const addMovie = () => {
    navigate({ pathname: `/new`, search: searchParams.toString() });
  };

  return (
    <section className={styles.movieSearchContainer}>
      <div className={styles.topRight}>
        <button className={styles.addButton} onClick={addMovie}>
          + ADD MOVIE
        </button>
      </div>
      <h1>FIND YOUR MOVIE</h1>
      <SearchForm initialSearchText={searchQuery} onSearch={onSearch} />
      <Outlet />
    </section>
  );
}
