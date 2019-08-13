import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

import { createStore } from "redux";
import { Provider } from "react-redux";

import * as actions from "./actions/Actions";
import reducers from "./reducers";


const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>console.log(store.getState()));
// store.dispatch(actions.ADDTODO('123'));
// store.dispatch(actions.ADDTODO('333'));
// store.dispatch(actions.ADDTODO('일이삼'));

// store.dispatch(actions.CHANGETODO(1));
// store.dispatch(actions.CHANGETODO(2));
// store.dispatch(actions.CHANGETODO(3));

// store.dispatch(actions.CHANGETODO(2));
// store.dispatch(actions.DELETETODO(0));
// console.log(store.getState())

// function test1(){
//     return({
//         type:'test1',
//     })
// }
// function test2(){
//     return({
//         type:'test2',
//     })
// }

// store.dispatch(test1());
// store.dispatch(test2());
ReactDOM.render(

<Provider store = {store}>
<TodoApp />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
