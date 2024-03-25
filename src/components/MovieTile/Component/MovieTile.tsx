import { useState } from "react";
import { Movie } from "../../../types/movie";
import styles from "../Styles/MovieTile.module.css";
import { extractYear } from "../../../utils/extractYear";
import defaultPosterUrl from "../../../assets/Images/200.png";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

export default function MovieTile({ movie, onClick, onEdit, onDelete }: Props) {
  const { poster_path, title, release_date, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

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
        <img
          src={poster_path || defaultPosterUrl}
          alt={title}
          style={{ width: "322px", height: "455px" }}
          onError={(e) => {
            e.currentTarget.src = defaultPosterUrl;
            e.currentTarget.onerror = null;
          }}
        />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.releaseYear}>{extractYear(release_date)}</span>
      </div>
      <p className={styles.genres}>{genres?.join(", ")}</p>
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
