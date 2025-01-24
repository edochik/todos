import { Filter } from "../../domain/types/Filter.ts";
import s from "./TodoFilter.module.scss";

interface TodoFilterProps {
  setFilter: (arg: Filter) => void;
}

export const filters = ["All", "Active", "Completed"];

const TodoFilter = ({ setFilter }: TodoFilterProps) => {
  return (
    <ul className={s.TodoFilter}>
      {filters.map((filter) => (
        <li className={s.item} key={filter}>
          <label className={s.label}>
            <input
              className={s.input}
              type="radio"
              name="TodoFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value as Filter)}
              defaultChecked={filter === "All"}
            />
            <span className={s.radio}>{filter}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export { TodoFilter };
