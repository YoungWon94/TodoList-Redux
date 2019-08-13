import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';


 
class Header extends Component { 

    constructor(props) { 
        super(props)
    }

    static propTypes = {
        addTodo : PropTypes.func,
     };

    static defaultProps = { 
        addTodo : () => console.log('addTodo 정의 안되있음'),
    };

    render() {

        return(
            <div>
                <h1>할 일 목록</h1>
                <TodoTextInput addTodo={this.props.addTodo}/>

            </div>
        );
    }
}




export default Header;