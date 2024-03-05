import { ChangeEvent } from "react";
import styles from "../Styles/SortControl.module.css";

interface Props {
  currentSelection: string;
  onSelectionChange: (newSelection: string) => void;
}

export default function SortControl({
  currentSelection,
  onSelectionChange,
}: Props) {
  const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSelectionChange(newValue);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort"
        defaultValue={currentSelection}
        onChange={handleSelectionChange}
        className={styles.select}
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
