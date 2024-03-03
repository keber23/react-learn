import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "../Component/SortControl";

describe("SortControl", () => {
  test("renders with initial selection correctly", () => {
    const currentSelection = "releaseDate";
    const onSelectionChange = jest.fn();
    render(
      <SortControl
        currentSelection={currentSelection}
        onSelectionChange={onSelectionChange}
      />
    );
    const selectElement = screen.getByLabelText<HTMLSelectElement>("Sort by:");
    expect(selectElement.value).toBe(currentSelection);
  });

  test("calls onSelectionChange with new value when select value changes", () => {
    const currentSelection = "releaseDate";
    const onSelectionChange = jest.fn();
    render(
      <SortControl
        currentSelection={currentSelection}
        onSelectionChange={onSelectionChange}
      />
    );
    const selectElement = screen.getByLabelText<HTMLSelectElement>("Sort by:");
    const newSelection = "title";
    fireEvent.change(selectElement, { target: { value: newSelection } });
    expect(onSelectionChange).toHaveBeenCalledWith(newSelection);
  });
});
