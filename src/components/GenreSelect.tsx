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
    <nav>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          style={{ fontWeight: genre === selectedGenre ? "bold" : "normal" }}
        >
          {genre}
        </button>
      ))}
    </nav>
  );
}
