import { render, screen } from "@testing-library/react";
import Loader from "../Component/Loader";

describe("Loader component", () => {
  it("renders with default loading text", () => {
    render(<Loader />);
    const loadingTextElement = screen.getByText(/Loading.../i);
    expect(loadingTextElement).toBeInTheDocument();
  });

  it("renders with custom loading text", () => {
    render(<Loader loadingText="Custom Loading Text" />);
    const loadingTextElement = screen.getByText(/Custom Loading Text/i);
    expect(loadingTextElement).toBeInTheDocument();
  });
});
