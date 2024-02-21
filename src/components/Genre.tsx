import { useState } from "react";

interface Props {
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
}
export default function Search({ genres, selectedGenre, onSelect }: Props) {
  const [currentGenre, setCurrentGenre] = useState(selectedGenre);

  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => {
            setCurrentGenre(genre);
            onSelect(genre);
          }}
          style={{ fontWeight: genre === currentGenre ? "bold" : "normal" }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
