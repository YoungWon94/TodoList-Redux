import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
 
class TodoTextInput extends Component { 

    state={text:''}

    constructor(props){
        super(props);
    
    }

    static propTypes = {
        addTodo : PropTypes.func,
    };

    static defaultProps = {
        addTodo : ()=>console.log('addTodo 가 정의되지 않음.'),
    };  

    setText=(e)=>{
        this.setState({
            text : e.target.value,
        })
    }

    addTodo=()=>{
        if(this.state.text === ''){
            alert('입력바람');
            return;
        }
        this.props.addTodo(this.state.text);
        this.setState({
            text : ''
        })
    }

    render() {

        return(
            <div>
                <input type="text" className="ttt" value={this.state.text} onChange={this.setText}/>
                <button onClick={this.addTodo}>추가</button>

            </div>
        );
    }
}


export default TodoTextInput;