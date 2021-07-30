import React, { useState } from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import TodoList from '../components/TodoList';

const initialTodos = [
  {
    title: "Plan workshop",
    description: "Make the workshop last minute",
    isComplete: true
  },
  {
    title: "Host workshop",
    description: "Host the workshop",
    isComplete: false
  },
  {
    title: "Cram assignment",
    description: "Due tonight = do tonight",
    isComplete: false
  }
];

function showAlert() {
  alert('You just clicked the button!');
}

function IndexPage() {
  const [todos, setTodos] = useState(initialTodos)

  function handleClick(index) {
    const newTodos = [...todos];
    newTodos[index].isComplete = !todos[index].isComplete;
    // newTodos[index].description = "Hello World!!"
    setTodos(newTodos);
  }

  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>Welcome home!</h1>
        <TodoList todos={todos} handleClick={handleClick} />


        <p>Go to another page <a href={'/another'}>here</a></p>

        <Button buttonText={'Click me!'} clickAction={showAlert} />
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
