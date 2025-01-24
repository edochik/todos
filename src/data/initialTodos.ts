import { ITodo } from "../domain/interface/ITodo.ts";

export const initialTodos: ITodo[] = [
	{
		id: crypto.randomUUID(),
		text: "Тестовое задание",
		completed: false,
	},
	{
		id: crypto.randomUUID(),
		text: "Прекрасный код",
		completed: true,
	},
	{
		id: crypto.randomUUID(),
		text: "Покрытие тестами",
		completed: false,
	},
];