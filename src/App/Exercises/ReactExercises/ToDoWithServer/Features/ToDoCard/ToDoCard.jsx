import './style.css';
import { DeleteIcon } from '../../Images/DeleteIcon';
import { MarkAsDoneIcon } from '../../Images/MarkAsDoneIcon';
import { EditIcon } from '../../Images/EditIcon';
import { formatDate } from '../../Utilities/formatDate';

const ERROR_MESSAGE = 'nie udało się ukończyć';

export function ToDoCard({
  todo,
  handleMarkAsDone,
  handleDelete,
  isDeleteError,
  isMarkAsDoneError,
  handleEdit,
}) {
  const { title, createdAt, author, isDone, doneDate, note } = todo;
  return (
    <div className={`todo-card ${isDone && 'todo-card--done'}`}>
      <div className="todo-card__details">
        <h2 className="todo-card__title">{title}</h2>
        <p className="todo-card__author">{author}</p>
        <p className="todo-card__createdAt">{formatDate(createdAt)}</p>
        <p className="todo-card__note">{note}</p>
      </div>
      <div className="todo-card__aside">
        <div className="todo-card__controls">
          {!isDone && (
            <MarkAsDoneIcon
              className={`todo-card__mark-as-done-icon ${
                isMarkAsDoneError && 'todo-card__mark-as-done-error'
              }`}
              onClick={handleMarkAsDone}
            />
          )}
          <EditIcon onClick={handleEdit} />
          <DeleteIcon
            className={`todo-card__delete-icon ${
              isDeleteError && 'todo-card__delete-error'
            }`}
            onClick={handleDelete}
          />
        </div>
        <div className="todo-card__message">
          {(isMarkAsDoneError || isDeleteError) && ERROR_MESSAGE}
        </div>
        <div className="todo-card__status">
          {isDone && (
            <>
              <MarkAsDoneIcon className="todo-card__mark-as-done-icon-done" />
              <div>{formatDate(doneDate)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
