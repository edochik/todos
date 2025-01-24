import { filterTodos } from "./filterTodos.ts";

const todos = [
	{ id: "1", text: "Task 1", completed: false },
	{ id: "2", text: "Task 2", completed: true },
	{ id: "3", text: "Task 3", completed: false },
];

const filterTestCases = [
	{ name: "All", expected: todos },
	{ name: "Active", expected: todos.filter(todo => !todo.completed) },
	{ name: "Completed", expected: todos.filter(todo => todo.completed) },
];

describe("test function filterTodos", () => {
	test.each(filterTestCases)("filter $name", ({ name, expected }) => {
		const result = filterTodos[name](todos);
		expect(result).toEqual(expected)
	})
})