import './style.css';

export function InputTextArea({ value, placeholder, id }) {
  return (
    <textarea
      type="text"
      className="todo-form__input todo-form__textarea"
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
}
