import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import store from './Reducer/store';//추가됨
import { Provider } from 'react-redux';//추가됨


const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);
//{router} //Provider 부분이 추가 되었음
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );

//  {/*<React.StrictMode>*/}
// {/*</React.StrictMode>*/}
// ReactDOM.render(

//     <BrowserRouter>
//      <App/>
//     </BrowserRouter>
//  ,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
