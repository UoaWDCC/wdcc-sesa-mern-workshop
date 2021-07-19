import React from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import exampleCall from '../api/exampleCall';

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
  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>Welcome home!</h1>
        <p>You have reached the default index page of the WDCC x SESA Mern Hackathon.</p>
        <p>This block of text is vertically centered through the magic of <b>CSS flexbox</b></p>
        <p>Go to another page <a href={'/another'}>here</a></p>

        <Button buttonText={'Click me!'} clickAction={showAlert} />
        <Button buttonText={'Say hello to the server!'} clickAction={callServer} />
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
