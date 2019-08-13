import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
 

class MainSection extends Component { 

    static propTypes = {             
        makeTodoItem : PropTypes.func,
    };

    static defaultProps = {     
        makeTodoItem : ()=>console.log('makeTodoItem 정의 안됨'),       
    };

    render() {
        return(
            <div>                
                {this.props.makeTodoItem()}                
            </div>
        );
    }
}


export default MainSection;