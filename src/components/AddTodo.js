import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title : ""
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }
    AddtodoItem=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                style={{flex:'10', padding:'5px'}}
                type="text" 
                name = 'title'
                value = {this.state.title} 
                onChange = {this.AddtodoItem}
                placeholder='AddTodo ...'
                />

                <input 
                className='btn'
                style={{flex:'1'}}
                type="submit" 
                value="Submit"
                />
            </form>
        )
    }
}

export default AddTodo

AddTodo.propTypes = {
    addTodo:PropTypes.func.isRequired
}