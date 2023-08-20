import './style.css';
import { Button } from '../../Components';
import { useEffect, useState } from 'react';
import { ToDoCard } from '../ToDoCard/ToDoCard';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export function ToDoList({ handleAddToDo, handleEdit }) {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState(false);
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  useEffect(() => {
    const controler = new AbortController();
    const promise = apiClient.getAllToDos(controler.signal);
    updateToDo(promise);
    return () => controler.abort();
  }, []);

  const updateToDo = (promise) => {
    apiClient
      .getAllToDos()
      .then((data) => {
        setTodos(data);
        setIsGetListError(false);
      })
      .catch((error) => {
        console.log();
        setIsGetListError(true);
        setTodos([]);
      });
  };

  const handleRefresh = () => {
    const promise = apiClient.getAllToDos();
    updateToDo(promise);
  };

  const handleMarkAsDone = (id) => {
    apiClient
      .markAsDone(id)
      .then((newToDo) =>
        setTodos((currentTodos) =>
          currentTodos.map((todo) => (todo.id === id ? newToDo : todo))
        )
      )
      .catch((error) => {
        console.log(error);
        setMarkAsDoneErrors((errors) => [...errors, id]);
      });
  };

  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    console.log(id);
    apiClient
      .deleteToDo(id)
      .then(() => {
        setTodos((currentTodos) => {
          return currentTodos.filter((todo) => todo.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
        setDeleteErrors((errors) => [...errors, id]);
      });
  };

  useEffect(() => {
    if (deleteErrors.length > 0) {
      setTimeout(() => setDeleteErrors([]), 1000);
    }
  }, [deleteErrors]);

  return (
    <div className="todo-list">
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <div className="todo-list-container">
        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleDelete={() => handleDelete(todo.id)}
            handleMarkAsDone={() => handleMarkAsDone(todo.id)}
            handleEdit={() => handleEdit(todo.id)}
            isDeleteError={deleteErrors.some((errorId) => errorId === todo.id)}
            isMarkAsDoneError={markAsDoneErrors.some(
              (errorId) => errorId === todo.id
            )}
          />
        ))}
      </div>
      {isGetListError && (
        <>
          <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
          <Button onClick={handleRefresh}>Odśwież widok</Button>
        </>
      )}
      {!isGetListError && todos.length === 0 && (
        <>
          <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</p>
          <Button onClick={handleAddToDo}>Dodaj Zadanie</Button>
        </>
      )}
      {todos.length > 0 && <Button onClick={handleAddToDo}>Dodaj</Button>}
    </div>
  );
}
