import { FormEvent, useRef } from "react";
import styles from "./SearchForm.module.css";

interface Props {
  initialSearchText: string;
  onSearch: (searchText: string) => void;
}
export default function SearchForm({ initialSearchText, onSearch }: Props) {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputElement.current) onSearch(inputElement.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="What do you want to watch?"
        ref={inputElement}
        defaultValue={initialSearchText}
      ></input>
      <button className={styles.button} type="submit">
        SEARCH
      </button>
    </form>
  );
}
