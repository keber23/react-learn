import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Component/Counter";

test("renders initial value provided in props", () => {
  const initialValue = 5;
  render(<Counter initialValue={initialValue} />);
  const valueElement = screen.getByText(`Value: ${initialValue}`);
  expect(valueElement).toBeInTheDocument();
});

test('click event on "decrement" button decrements the displayed value', () => {
  const initialValue = 0;
  render(<Counter initialValue={initialValue} />);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  const valueElement = screen.getByText("Value: -1");
  expect(valueElement).toBeInTheDocument();
});

test('click event on "increment" button increments the displayed value', () => {
  const initialValue = 0;
  render(<Counter initialValue={initialValue} />);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  const valueElement = screen.getByText("Value: 1");
  expect(valueElement).toBeInTheDocument();
});
