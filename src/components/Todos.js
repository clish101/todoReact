import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {
    
    render() {
        
        return this.props.todos.map((todo)=>(<TodoItem key={todo.id} 
            delTodo = {this.props.delTodo}
            todo={todo} markComplete={this.props.markComplete}/>))
    }
}

Todos.propTypes = {
    todos:PropTypes.array.isRequired,
    delTodo:PropTypes.func.isRequired,
    markComplete:PropTypes.func.isRequired

}
export default Todos
