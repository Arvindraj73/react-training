import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

function Welcome(props) {
    return (
      <h1>Hello {props.name}</h1>
    );
  }
  const element = <Welcome name="Arvind"/>
  
  ReactDOM.render(element, document.getElementById('name'));
