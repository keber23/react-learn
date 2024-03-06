import { ChangeEvent } from "react";
import styles from "../Styles/SortControl.module.css";
import { SortOption } from "../../Types/sortOption";

export const displayValues: SortOption[] = [
  { value: "releaseDate", label: "Release Date" },
  { value: "title", label: "Title" },
];

interface Props {
  displayValues: SortOption[];
  initialSelection?: SortOption;
  onSelectionChange: (newSelection: SortOption) => void;
}

export default function SortControl({
  initialSelection,
  onSelectionChange,
}: Props) {
  const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSelection = displayValues.find(
      (option) => option.value === event.target.value
    );
    if (newSelection) onSelectionChange(newSelection);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort"
        defaultValue={initialSelection?.value}
        onChange={handleSelectionChange}
        className={styles.select}
      >
        {displayValues.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
