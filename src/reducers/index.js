import *as actionName from "../actions/ActionTypes";

import { combineReducers } from "redux";




const initalState={
    todos:[ //////1
        {
            id:0,
            text:"test",
            complete : false,       
        }
]}


const modifyReducer = (state=initalState, action)=>{

    let copyState;
    let item;
    let todo;

    switch (action.type) {

       case actionName.ADDTODO:
           console.log(state);
           
           copyState = state.todos; //////2
            console.log(copyState);
            const id = (copyState.length-1 < 0)? 0 : copyState[copyState.length-1].id+1;

            todo = {
                id : id,
                text : action.text,
                complete : action.complete,
            }
            return {
                todos :[
                ...(state.todos),
                todo,
            ]}
                
        case actionName.CHANGETODO:
            // console.log('체인지 들어옴');
            // console.log('액션 id : ',action.id);
            // console.log("state:",{state});
            

            copyState = state.todos;
            item = findTodo(copyState,action.id); // return {todo, index}
            todo = item.todo;
            
            todo.complete = (todo.complete)? false : true;


             return {
                 todos :[
                ...copyState.slice(0,item.index),
                item.todo,
                ...copyState.slice(item.index+1,item.length),
            ]};
           

        case actionName.DELETETODO:
            copyState = state.todos;
            item = findTodo(copyState,action.id); // return {todo, index}
           
            
            return {
                todos : [
                ...copyState.slice(0,item.index),
                ...copyState.slice(item.index+1,item.length),
            ]
        };
            

        default:
            return state;
    }
}

const findTodo = (todos,id) =>{
  
    for(let i=0; i<todos.length; i++){
       
        
        if(todos[i].id == id){
            return {
                todo : todos[i],
                index : i,
            }
        }
    }
}


// const reducer1 = (state = {num:10},action) =>{
//     if(action.type === 'test1'){
//         return {
//             num : state.num+1,
//         }
//     }else{
//         return state;
//     }
// }
// const reducer2 = (state = {num:10},action) =>{
//     if(action.type === 'test2'){
//         return {
//             num : state.num+10,
//         }
//     }else{
//         return state;
//     }
// }

const reducers = combineReducers({
    // inputReducer:inputReducer(state.inputReducer, action),
    // inputReducer,

    modifyReducer,  
    // reducer1,
    // reducer2,
});

export default reducers;