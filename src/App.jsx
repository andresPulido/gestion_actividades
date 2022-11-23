import React, { Fragment, useState, useRef, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { TodoResult } from './components/TodoResult';
import { Titulo } from './components/Titulo';
import { Registrar } from './components/Registrar';

const KEY = 'todoApp.todos';

export function App() {
  const [todos, setTodos] = useState([{ id: generarId(), task: 'Tarea 1', completed: false }]);
  const todoTaskRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    console.log(todoTaskRef.current.value);
    console.log(todoTaskRef.current);
    console.log(todoTaskRef);
    if (task === '') {
      alert("no puede registrar tareas sin texto");
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: generarId(), task, completed: false }];
      console.log(task);
    });
    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo => !todo.completed));
    setTodos(newTodos);
  };

  const titulo = "Lista de Tareas Andres";
  let pendientes = todos.filter((todo) => !todo.completed).length;


  return (
    <Fragment>
      <Titulo titulo={titulo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Registrar todoTaskRef={todoTaskRef} handleTodoAdd={handleTodoAdd} handleClearAll={handleClearAll} />
      <TodoResult cantidad={pendientes} />
    </Fragment>
  );
}
function generarId() {
  return "id" + Math.round(Math.random() * 9999) + "-" + Math.round(Math.random() * 9999999999);
}