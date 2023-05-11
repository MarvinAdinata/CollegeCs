import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { CustomerName, MenuDisplay} from './App';
import reportWebVitals from './reportWebVitals';
import apple from './apple.jpeg'
import orange from './orange.jpeg'
import martabak from './martabak.jpeg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  MenuDisplay(apple)

  // <React.StrictMode>
  //   <App />
  //   <CustomerName/>
  //   <MenuDisplay{}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
