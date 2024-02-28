import styles from "../Styles/GenreSelect.module.css";

export type Genre = "ALL" | "DOCUMENTARY" | "COMEDY" | "HORROR" | "CRIME";

export const genres: Genre[] = [
  "ALL",
  "DOCUMENTARY",
  "COMEDY",
  "HORROR",
  "CRIME",
];

interface Props {
  genres: Genre[];
  selectedGenre: Genre;
  onSelect: (genre: Genre) => void;
}
export default function GenreSelect({
  genres,
  selectedGenre,
  onSelect,
}: Props) {
  return (
    <nav className={styles.nav}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          data-cy={genre.toLowerCase()}
          className={`${styles.button} ${
            genre.toLowerCase() === selectedGenre.toLowerCase()
              ? styles.selected
              : ""
          }`}
        >
          {genre}
        </button>
      ))}
    </nav>
  );
}
