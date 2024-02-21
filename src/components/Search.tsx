import { useState } from "react";

interface Props {
  intitialSearchText: string;
  onSearch: (searchText: string) => void;
}
export default function Search({ intitialSearchText, onSearch }: Props) {
  const [searchText, setSearchText] = useState(intitialSearchText);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(searchText)}
      ></input>
      <button onClick={() => onSearch(searchText)}>Search</button>
    </div>
  );
}
