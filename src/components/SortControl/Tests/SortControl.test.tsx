import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortControl from "../Component/SortControl";
import { SortOption } from "../../Types/sortOption";

describe("SortControl", () => {
  let onSelectionChange: jest.Mock;
  beforeEach(() => {
    onSelectionChange = jest.fn();
  });

  test.each<SortOption>(["releaseDate", "title"])(
    "renders with initial selection '%s' correctly",
    (initialSelection) => {
      render(
        <SortControl
          initialSelection={initialSelection}
          onSelectionChange={onSelectionChange}
        />
      );

      const selectElement =
        screen.getByLabelText<HTMLSelectElement>("Sort by:");
      expect(selectElement.value).toBe(initialSelection);
    }
  );

  test("calls onSelectionChange with new value when select value changes", () => {
    render(
      <SortControl
        initialSelection="releaseDate"
        onSelectionChange={onSelectionChange}
      />
    );
    const selectElement = screen.getByLabelText<HTMLSelectElement>("Sort by:");
    const newSelection = "title";
    userEvent.selectOptions(selectElement, newSelection);
    expect(onSelectionChange).toHaveBeenCalledWith(newSelection);

    expect(selectElement.value).toBe(newSelection);
  });
});
