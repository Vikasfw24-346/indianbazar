import React from 'react';
//4. add ListItem 
//import ReactDOM from 'react-dom/client';


//1 or 3. We can use that as a boilerplate by using react code
//import ReactDOM from 'react-dom/client';

//2. smallest react element/alternet way some time jsx is not needed for development
import ReactDOM from 'react-dom';


import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
//import ListItem from './components/ListItem';

//4. add ListItem 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//or

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//2. smallest react element/alternet way some time jsx is not needed for development
// const element =<h1>Vikas Tiwari</h1>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


//1 or 3. We can use that as a boilerplate by using react code
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
