import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortControl from "../Component/SortControl";
import { sortOptions } from "../Component/SortControl";

describe("SortControl", () => {
  let onSelectionChange: jest.Mock;
  beforeEach(() => {
    onSelectionChange = jest.fn();
  });

  test.each(sortOptions)(
    "renders with initial selection '%s' correctly",
    (currentSelection) => {
      render(
        <SortControl
          sortOptions={sortOptions}
          initialSelection={currentSelection}
          onSelectionChange={onSelectionChange}
        />
      );

      const selectElement =
        screen.getByLabelText<HTMLSelectElement>("Sort by:");
      expect(selectElement.value).toBe(currentSelection.value);
      const selectedOption = selectElement
        .selectedOptions[0] as HTMLOptionElement;
      const displayedValue = selectedOption.textContent;
      expect(displayedValue).toBe(currentSelection.label);
    }
  );

  test("calls onSelectionChange with new value when select value changes", () => {
    render(
      <SortControl
        sortOptions={sortOptions}
        initialSelection={sortOptions[0]}
        onSelectionChange={onSelectionChange}
      />
    );
    const selectElement = screen.getByLabelText<HTMLSelectElement>("Sort by:");
    const newSelection = sortOptions[1];
    userEvent.selectOptions(selectElement, newSelection.value);
    expect(onSelectionChange).toHaveBeenCalledWith(newSelection);

    expect(selectElement.value).toBe(newSelection.value);
    const selectedOption = selectElement
      .selectedOptions[0] as HTMLOptionElement;
    const displayedValue = selectedOption.textContent;
    expect(displayedValue).toBe(newSelection.label);
  });
});
