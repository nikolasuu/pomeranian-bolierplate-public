import './style.css';

export function Button({ variant = 'primary', children, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`todo-button todo-button--${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
}
