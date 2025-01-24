import { useEffect, useState } from "react";
import s from "./Todos.module.scss";
import { Input } from "../Input/";
import { Todo } from "../Todo/";
import { TodoFilter } from "../TodoFilter/";
import { initialTodos } from "../../data/initialTodos.ts";
import { getFilterTodos } from "./getFilterTodos.ts";
import { ITodo } from "../../domain/interface/ITodo.ts";
import { Filter } from "../../domain/types/Filter.ts";

const Todos = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filter, setFilter] = useState<Filter>("All");
  const tasksToDo: number = todos.filter((todo) => !todo.completed).length;

  const handleCheckboxChange = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onClickClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && inputValue !== "") {
        setTodos((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false,
          },
        ]);
        setInputValue("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  return (
    <div className={s.Todos}>
      <h1 className={s.title}>todos</h1>
      <Input value={inputValue} onChange={setInputValue} />
      <ul className={s.list}>
        {getFilterTodos[filter]?.(todos).map((todo) => (
          <li className={s.item} key={todo.id}>
            <Todo {...todo} onChange={handleCheckboxChange} />
          </li>
        ))}
      </ul>
      <div className={s.wrapper}>
        <p className={s.info}>
          {tasksToDo} {tasksToDo === 1 ? "item" : "items"} left
        </p>
        <TodoFilter setFilter={setFilter} />
        <button className={s.button} onClick={() => onClickClearCompleted()}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export { Todos };
