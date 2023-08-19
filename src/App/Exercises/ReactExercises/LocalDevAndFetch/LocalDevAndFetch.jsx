import React, { useEffect, useState } from 'react';

import './style.css';

export function LocalDevAndFetch() {
  const [toDoList, setToDoList] = useState([]);
  const [refreshList, setRefreshList] = useState(0);

  useEffect(() => {
    async function fetchToDos() {
      const results = await fetch('http://localhost:3333/api/todo');
      if (results.ok) {
        const data = await results.json();
        console.log(data);
        setToDoList(data);
      }
    }

    fetchToDos();
  }, [refreshList]);

  const addToDo = async () => {
    const newRecord = await fetch('http://localhost:3333/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        title: 'AddButton',
        note: 'newTODO',
        author: 'Nikolas',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      setRefreshList(refreshList + 1);
    });
  };

  return (
    <>
      <h1>TODO List</h1>
      <button onClick={addToDo}>Add TODO</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Note</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((listItem) => (
            <tr key={listItem.id}>
              <td>{listItem.id}</td>
              <td>{listItem.title}</td>
              <td>{listItem.note}</td>
              <td>{listItem.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
