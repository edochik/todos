import { render, screen } from "@testing-library/react";
import { filters, TodoFilter } from "./";

describe("TodoFilter component test", () => {
  test("component has arguments", () => {
    render(<TodoFilter setFilter={() => {}} />);
    filters.forEach((filter) => {
      const labelText = screen.getByText(filter);
      expect(labelText).toBeInTheDocument();
    });
  });
  test("default checked radio button All", () => {
    render(<TodoFilter setFilter={() => {}} />);
    filters.forEach((filter, index) => {
      const radio = screen.getByRole("radio", { name: filter });
      if (index === 0) {
        expect(radio).toBeChecked();
      } else {
        expect(radio).not.toBeChecked();
      }
    });
  });
});
