import { ITodo } from "../../domain/interface/ITodo.ts";
import s from "./Todo.module.scss";

interface TodoProps extends ITodo {
  onChange: (id: string) => void;
}

const Todo = ({ id, text, completed, onChange }: TodoProps) => {
  return (
    <label className={s.Todo}>
      <input
        className={s.input}
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />
      <span className={s.checkbox}></span>
      <span className={s.name}>{text}</span>
    </label>
  );
};

export { Todo };
