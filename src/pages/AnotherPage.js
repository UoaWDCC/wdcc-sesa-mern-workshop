import React from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';

function getResult() {
  alert(`The meaning of life: ${getMeaningOfLife()}`)
}

function AnotherPage() {

  return (
    <div>
      <h1>This is another page!</h1>
      <p>Go back to the previous page <a href={'/'}>here</a></p>
      <Button buttonText={"Find out the meaning of life"} clickAction={getResult} />
    </div>

  );
}

export default AnotherPage;
