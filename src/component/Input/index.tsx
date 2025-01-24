import s from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (arg: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <>
      <input
        className={s.input}
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </>
  );
};

export { Input };
