import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import Header from './Header';
import MainSection from './MainSection';

import { connect } from "react-redux";
import * as actions from "../actions/Actions";
import TodoItem from "./TodoItem";

/* smart view */
class TodoApp extends Component { 
  static propTypes = {
    addTodo : PropTypes.func,
    changeTodo : PropTypes.func,
    deleteTodo : PropTypes.func,
    todoList : PropTypes.array,
  };

  static defaultProps = {
    addTodo : () => console.log('addTodo 정의 안되있음'),
    changeTodo : () => console.log('changeTodo 정의 안되있음'),
    deleteTodo : () => console.log('deletodo 정의 안되있음'),    
    todoList : undefined,
  };


  addTodo = (text)=>{        
    this.props.addTodo(text); //dispatch action
  }

  makeTodoItem = ()=>{ //TodoItem 컴포넌트 생성
    
      return (this.props.todoList.map((todo,index)=>(
          <TodoItem key={index}
              id={todo.id}
              text={todo.text}
              complete={todo.complete}
              changeTodo={this.props.changeTodo}
              deleteTodo={this.props.deleteTodo}
          />
      )))
  
  }
  
  changeTodo = (id)=>{

  }
  deleteTodo = (id)=>{

  }

  render() {
    console.log("R",this.props.todoList);
    return(
      <div>
        <Header addTodo={this.addTodo}/>
        <MainSection 
          todoList={this.props.todoList} 
          
          makeTodoItem={this.makeTodoItem}
          />
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  // console.log("1",state.modifyReducer);
  // console.log("2",state.reducers);
  // console.log("3",state.modifyReducer.state);
  // console.log("4",state.modifyReducer.todoList);
  // console.log("5",state.modifyReducer.state.id);
  // const ary = state.modifyReducer;
  // console.log(ary);
  
  

  // const list = state.modifyReducer;
  
  return ({
      todoList : state.modifyReducer.todos,
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
      addTodo : (text)=>dispatch(actions.ADDTODO(text)),
      changeTodo : (id)=>dispatch(actions.CHANGETODO(id)),
      deleteTodo : (id)=>dispatch(actions.DELETETODO(id)),
    })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);