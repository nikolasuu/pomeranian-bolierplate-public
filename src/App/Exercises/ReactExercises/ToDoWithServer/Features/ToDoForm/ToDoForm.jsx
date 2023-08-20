import './style.css';
import { Button, Label, Input, InputTextArea } from '../../Components';
import { useEffect, useState } from 'react';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export function ToDoForm({ handleGoBack, isAddForm, id }) {
  const [isError, setIsError] = useState(false);
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const getApiPromiseForSubmite = () => {
    if (isAddForm) {
      return apiClient.addToDo({ author, note, title });
    } else {
      return apiClient.updateToDo(id, { author, note, title });
    }
  };

  useEffect(() => {
    if (!isAddForm && id) {
      const getToDoAsync = async () => {
        try {
          const { author, note, title } = await apiClient.getToDo(id);
          setAuthor(author);
          setNote(note);
          setTitle(title);
          setIsError(false);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
      };
      getToDoAsync();
    }
  }, [id, isAddForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await getApiPromiseForSubmite();
      console.log(data);
      handleGoBack();
    } catch (error) {
      setIsError(true);
    }
  };

  // const handleGoBack = () => {};

  return (
    <div>
      <p>{isAddForm ? 'Dodawanie' : 'Edycja'} zadania</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        <Label htmlFor="title">Tytuł</Label>
        <Input
          id="title"
          value={title}
          onChange={(element) => setTitle(element.target.value)}
          placeholder="Kupić parasol na balkon"
        />
        {isAddForm && (
          <>
            <Label htmlFor="author">Autor</Label>
            <Input
              id="author"
              value={author}
              onChange={(element) => setAuthor(element.target.value)}
              placeholder="Wojtek"
            />
          </>
        )}

        <Label htmlFor="note">Treść</Label>
        <InputTextArea
          id="note"
          value={note}
          onChange={(element) => setNote(element.target.value)}
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        />
        <p className="todo-form-error">
          {isError && 'Wystąpił błąd, spróbuj ponownie'}
        </p>

        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            COFNIJ
          </Button>
          <Button type="submite">{isAddForm ? 'DODAJ' : 'ZAPISZ'}</Button>
        </div>
      </form>
    </div>
  );
}
