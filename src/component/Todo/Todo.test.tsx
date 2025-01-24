import { Todo } from "./";
import { render, screen } from "@testing-library/react";

const data = { id: "1", text: "test", completed: false };

describe("Todo component test", () => {
  test("component has arguments", () => {
    render(<Todo {...data} onChange={() => {}} />);
    const labelText = screen.getByText("test");
    expect(labelText).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
  test("component not checked", () => {
    render(<Todo {...data} onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
  test("component checked", () => {
    const checkedData = { ...data };
    checkedData.completed = true;
    render(<Todo {...checkedData} onChange={() => {}} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });
});
