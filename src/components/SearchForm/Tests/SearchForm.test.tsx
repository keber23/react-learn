import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../Component/SearchForm";

test("component renders an input with the value equal to initial value passed in props", () => {
  const initialSearchText = "Initial value";
  render(
    <SearchForm initialSearchText={initialSearchText} onSearch={() => {}} />
  );
  const inputElement = screen.getByPlaceholderText<HTMLInputElement>(
    "What do you want to watch?"
  );
  expect(inputElement.defaultValue).toBe(initialSearchText);
});

test('after typing to the input and a "click" event on the Submit button, the "onSearch" prop is called with proper value', () => {
  const onSearchMock = jest.fn();
  render(<SearchForm initialSearchText="" onSearch={onSearchMock} />);
  const inputElement = screen.getByPlaceholderText<HTMLInputElement>(
    "What do you want to watch?"
  );
  const submitButton = screen.getByText("SEARCH");
  const searchValue = "Search query";

  userEvent.type(inputElement, searchValue);
  userEvent.click(submitButton);

  expect(onSearchMock).toHaveBeenCalledWith(searchValue);
});

test('after typing to the input and pressing Enter key, the "onSearch" prop is called with proper value', () => {
  const onSearchMock = jest.fn();
  render(<SearchForm initialSearchText="" onSearch={onSearchMock} />);
  const inputElement = screen.getByPlaceholderText<HTMLInputElement>(
    "What do you want to watch?"
  );
  const searchValue = "Search query";

  userEvent.type(inputElement, `${searchValue}{enter}`);

  expect(onSearchMock).toHaveBeenCalledWith(searchValue);
});
