import { render, fireEvent, screen } from "@testing-library/react";
import Dialog from "../Component/Dialog";

describe("Dialog", () => {
  it("renders with title and content", () => {
    const onClose = jest.fn();
    render(
      <Dialog title="Test Dialog" onClose={onClose}>
        <p>Dialog content</p>
      </Dialog>
    );
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Dialog content")).toBeInTheDocument();
  });
  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Dialog title="Test Dialog" onClose={onClose}>
        <p>Dialog content</p>
      </Dialog>
    );
    fireEvent.click(screen.getByText("×"));
    expect(onClose).toHaveBeenCalled();
  });
  it("calls onClose when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(
      <Dialog title="Test Dialog" onClose={onClose}>
        <p>Dialog content</p>
      </Dialog>
    );
    fireEvent.keyUp(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });
});
