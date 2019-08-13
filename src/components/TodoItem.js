import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import *as css from "../css";
 
class TodoItem extends Component { 
    state={
        checked : false
    }  

    static propTypes = {
       id : PropTypes.number,
       text : PropTypes.string,
       complete : PropTypes.bool,
       
       changeTodo : PropTypes.func,
       deleteTodo : PropTypes.func,

    };

    static defaultProps = { 
        id : -1,
       text : 'no text',
       complete : false,
       changeTodo : ()=>console.log('changeTodo 정의 안됨'),
       deleteTodo : ()=>console.log('changeTodo 정의 안됨'),
       }
  

    changeTodo =()=>{
        if(this.state.checked){
            console.log('체크해제');
            
        }else{
            console.log('체크됨');

        } 
        
        this.props.changeTodo(this.props.id);
        
        this.setState({
            checked : (this.state.checked)? false : true,
        })       
    }

    deleteTodo = ()=>{
        this.props.deleteTodo(this.props.id)
    }

    drawText = () =>{        
        if(this.state.checked){
            return <span style={css.TodoItem_redFont}>#{this.props.id}  {this.props.text}   </span>
        }else{
            return <span style={css.TodoItem_balckFont}>#{this.props.id}  {this.props.text}   </span>
        }
    }

    render() {
        return(
            <div>
            <div style={css.TodoItem_box}>
                <input  type="checkbox" onChange={this.changeTodo}></input>
                {this.drawText()}                
                <button onClick={this.deleteTodo}>X</button>
                
            </div>
            </div>
           
        );
    }
}


export default TodoItem;