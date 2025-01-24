import { Todos } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo component test", () => {

  test("user adds a todo and presses Enter", async () => {
    const user = userEvent.setup();
    render(<Todos />);
    const input = screen.getByRole("textbox");
    await user.type(input, "test{Enter}");
    const newTodo = screen.getByText("test");
    expect(newTodo).toBeInTheDocument();
    const countTodos = screen.getAllByRole("checkbox").length;
    expect(countTodos).toBe(4);
  });

  test("user marks a todo as completed", async () => {
    const user = userEvent.setup();
    render(<Todos />);
    const checkbox = screen.getByLabelText("Тестовое задание");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("user pressed button Active", async () => {
    const user = userEvent.setup();
    render(<Todos />);
    const radio = screen.getByLabelText("Active");
    await user.click(radio);
    const countCheckbox = screen.getAllByRole("checkbox").length;
    expect(countCheckbox).toBe(2);
  });

  test("user pressed button Completed", async () => {
    const user = userEvent.setup();
    render(<Todos />);
    const radio = screen.getByLabelText("Completed");
    await user.click(radio);
    const countCheckbox = screen.getAllByRole("checkbox").length;
    expect(countCheckbox).toBe(1);
  });

  test("user press button Clear completed", async () => {
    const user = userEvent.setup();
    render(<Todos />);
    const button = screen.getByRole("button");
    await user.click(button);
    const countCheckbox = screen.getAllByRole("checkbox").length;
    expect(countCheckbox).toBe(2);
  });
});
