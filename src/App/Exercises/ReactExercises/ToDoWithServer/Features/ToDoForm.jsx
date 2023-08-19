import './style.css';
import { Button, Label, Input, InputTextArea } from '../Components';
import { useState } from 'react';

export function ToDoForm() {
  const [isError, setIsError] = useState(false);

  const handleAdd = (event) => {
    event.preventDefault();
    const success = Math.random() > 0.5;
    if (success) {
      handleGoBack();
      console.log(success);
      setIsError(success);
    } else {
      console.log(success);
      setIsError(success);
    }
  };

  const handleGoBack = () => {};

  return (
    <div>
      <p>Dodawanie zadania</p>
      <form className="todo-form">
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" placeholder="Kupić parasol na balkon" />
        <Label htmlFor="author">Autor</Label>
        <Input id="author" placeholder="Wojtek" />
        <Label htmlFor="note">Treść</Label>
        <InputTextArea
          id="note"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        />
        {isError && (
          <p className="todo-form-error">Wystąpił błąd, spróbuj ponownie</p>
        )}
        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            COFNIJ
          </Button>
          <Button type="submite" onClick={handleAdd}>
            DODAJ
          </Button>
        </div>
      </form>
    </div>
  );
}
