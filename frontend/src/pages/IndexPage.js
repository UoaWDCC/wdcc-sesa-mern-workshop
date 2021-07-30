import React, { useEffect, useState } from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import { exampleCall, getTodos, createTodos, updateTodo } from '../api/exampleCall';
import TodoList from '../components/TodoList';

const initialTodos = [
  {
    title: "Plan Workshop",
    description: "Make the workshop last minute",
    isComplete: true
  },
  {
    title: "Host Workshop",
    description: "Host a banger of a workshop",
    isComplete: false
  },
  {
    title: "Cram Assignment",
    description: "Due tonight = do tonight",
    isComplete: false
  }
];

function showAlert() {
  alert('You just clicked the button!');
}

async function callServer() {
  const response = await exampleCall();
  if (response.success) {
    alert(`Server says: ${JSON.stringify(response.data)}`);
  } else {
    alert(`Server had an error: ${JSON.stringify(response.error)}`);
  }
}

function IndexPage() {
  const [todos, setTodos] = useState(initialTodos);

  async function checkDb() {
    const response = getTodos();
    if (response.success && response.data.length !== 0) {
      setTodos(response.data);
    } else {
      // Does not work properly
      const newTodosRepsonse = createTodos(initialTodos);
      if (response.success) {
        setTodos(newTodosRepsonse.data);
      }
    }
  }

  useEffect(function() {
    checkDb()
  }, []);

  async function handleClick(index) {
    await updateTodo(todos[index])
    const newTodos = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    setTodos(newTodos);
  }

  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>My Todos</h1>
        <TodoList todos={todos} handleClick={handleClick} />
        
        <p>Go to another page <a href={'/another'}>here</a></p>

        <Button buttonText={'Click me!'} clickAction={showAlert} />
        <Button buttonText={'Say hello to the server!'} clickAction={callServer} />
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
