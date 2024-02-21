import { FormEvent, useRef } from "react";

interface Props {
  initialSearchText: string;
  onSearch: (searchText: string) => void;
}
export default function Search({ initialSearchText, onSearch }: Props) {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputElement.current) onSearch(inputElement.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search..."
        ref={inputElement}
        defaultValue={initialSearchText}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
