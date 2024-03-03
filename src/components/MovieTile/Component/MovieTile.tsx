import { useState } from "react";
import { Movie } from "../../Types/movie";
import styles from "../Styles/MovieTile.module.css";
interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

export default function MovieTile({ movie, onClick, onEdit, onDelete }: Props) {
  const { imageUrl, movieName, releaseYear, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenuButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsContextMenuOpen(true);
  };

  const handleEditClick = () => {
    onEdit(movie);
    setIsContextMenuOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete(movie);
    setIsContextMenuOpen(false);
  };

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div className={styles.movieTile} onClick={handleClick}>
      <div className={styles.poster}>
        <img src={imageUrl} alt={movieName} />
      </div>
      <div className={styles.info}>
        <h2>{movieName}</h2>
        <span className={styles.releaseYear}>{releaseYear}</span>
        <p className={styles.genres}>{genres?.join(", ")}</p>
      </div>
      <button
        className={styles.contextMenuButton}
        onClick={handleContextMenuButtonClick}
      >
        ...
      </button>
      {isContextMenuOpen && (
        <div className={styles.contextMenu}>
          <button className={styles.contextMenuItem} onClick={handleEditClick}>
            Edit
          </button>
          <button
            className={styles.contextMenuItem}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
