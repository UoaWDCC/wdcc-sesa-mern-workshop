import React from 'react';
import '../styling/index.css';
import { Button } from '../components/Button';

function showAlert() {
  alert('You just clicked the button!');
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
      </div>
      <div className={'spacer'} />
    </div>
  );
}

export default IndexPage;
