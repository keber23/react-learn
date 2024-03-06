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
  const { poster_path, title, release_date, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const defaultPosterUrl = "https://via.placeholder.com/150"; // Default image URL

  const handleContextMenuButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsContextMenuOpen(true);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onEdit(movie);
    setIsContextMenuOpen(false);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete(movie);
    setIsContextMenuOpen(false);
  };

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div className={styles.movieTile} onClick={handleClick}>
      <div className={styles.poster}>
        <img src={poster_path || defaultPosterUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.releaseYear}>{release_date}</span>
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
