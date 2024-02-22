import styles from "./GenreSelect.module.css";

interface Props {
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
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
