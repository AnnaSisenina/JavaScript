/* Создать компонент TodoList, который позволяет добавлять элементы в список дел через текстовое поле ввода. Список должен обновляться при добавлении нового дела.*/
import React, { useState } from "react";

export default function ToDoList() {
  const [list, setList] = useState([]);

  const [task, setTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    else {
        setList([...list, task]);
        setTask("");
    }
    
  };

  const updateTask = (event) => {
    setTask(event.target.value);
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" value={task} onChange={updateTask}/>
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {list.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
