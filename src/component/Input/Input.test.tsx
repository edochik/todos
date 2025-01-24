import { Input } from "./";
import { render, screen } from "@testing-library/react";

describe("Input component Tests", () => {
  test("initial input value is empty", () => {
    render(<Input value="" onChange={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("");
  });
  test("user can input a value", () => {
    render(<Input value="test" onChange={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("test");
  });
});
