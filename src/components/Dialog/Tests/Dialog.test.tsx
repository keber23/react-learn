import { render, fireEvent, screen } from "@testing-library/react";
import Dialog from "../Component/Dialog";

describe("Dialog", () => {
  let onClose: jest.Mock;

  const renderComponent = () => {
    return render(
      <Dialog title="Test Dialog" onClose={onClose}>
        <p>Dialog content</p>
      </Dialog>
    );
  };

  beforeEach(() => {
    onClose = jest.fn();
  });

  it("renders with title and content", () => {
    renderComponent();
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Dialog content")).toBeInTheDocument();
  });
  it("calls onClose when close button is clicked", () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("close-button"));
    expect(onClose).toHaveBeenCalled();
  });
  it("calls onClose when Escape key is pressed", () => {
    renderComponent();
    fireEvent.keyUp(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });
});
