import { ChangeEvent } from "react";
import styles from "../Styles/SortControl.module.css";
import { SortOption } from "../../../types/sortOption";

interface Props {
  initialSelection?: SortOption;
  onSelectionChange: (newSelection: SortOption) => void;
}

export default function SortControl({
  initialSelection,
  onSelectionChange,
}: Props) {
  const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption: SortOption = event.target.value as SortOption;
    onSelectionChange(selectedOption);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort"
        defaultValue={initialSelection || "releaseDate"}
        onChange={handleSelectionChange}
        className={styles.select}
      >
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
