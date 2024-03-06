import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortControl from "../Component/SortControl";
import { displayValues } from "../Component/SortControl";

describe("SortControl", () => {
  let onSelectionChange: jest.Mock;
  beforeEach(() => {
    onSelectionChange = jest.fn();
  });

  test.each(displayValues)(
    "renders with initial selection '%s' correctly",
    (currentSelection) => {
      render(
        <SortControl
          displayValues={displayValues}
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
        displayValues={displayValues}
        initialSelection={displayValues[0]}
        onSelectionChange={onSelectionChange}
      />
    );
    const selectElement = screen.getByLabelText<HTMLSelectElement>("Sort by:");
    const newSelection = displayValues[1];
    userEvent.selectOptions(selectElement, newSelection.value);
    expect(onSelectionChange).toHaveBeenCalledWith(newSelection);

    expect(selectElement.value).toBe(newSelection.value);
    const selectedOption = selectElement
      .selectedOptions[0] as HTMLOptionElement;
    const displayedValue = selectedOption.textContent;
    expect(displayedValue).toBe(newSelection.label);
  });
});
