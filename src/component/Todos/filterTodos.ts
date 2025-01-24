import { ITodo } from "../../domain/interface/ITodo.ts";

export const filterTodos: Record<string, (todos: ITodo[]) => ITodo[]> = {
	All: (todos) => todos,
	Active: (todos) => todos.filter((todo) => !todo.completed),
	Completed: (todos) => todos.filter((todo) => todo.completed),
};