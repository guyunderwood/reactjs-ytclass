import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent3 from './components/HelloComponent3';

function HelloComponent(){
  return <h1>Hello Component by function</h1>
}

class HelloComponent2 extends React.Component{    // needed to start with capital letter
  render(){
    return <li>Hello Component by class</li>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <HelloComponent/>
  // </HelloComponent2>
  // <HelloComponent3/>
  
);

// ReactDOM.render(<HelloComponent2/>, document.getElementById('root'));   // can't use this syntax?????

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
