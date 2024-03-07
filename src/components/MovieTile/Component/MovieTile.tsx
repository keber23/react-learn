import { useState } from "react";
import { Movie } from "../../Types/movie";
import styles from "../Styles/MovieTile.module.css";
import { extractYear } from "../../../utils/extractYear";
import defaultPosterUrl from "../../Images/200.png";
interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

export default function MovieTile({ movie, onClick, onEdit, onDelete }: Props) {
  const { posterPath, title, releaseDate, genres } = movie;
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
          src={posterPath || defaultPosterUrl}
          alt={title}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <span className={styles.releaseYear}>{extractYear(releaseDate)}</span>
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
