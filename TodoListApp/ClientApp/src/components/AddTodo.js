import React, { Component } from 'react';

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            todo: '',
            todoError: false
        };
    }

    // On entering the data, need to set the status
    updateInput = (e) => {
        this.setState({ todo: e.target.value });
    }

    // On Submit function
    submitTodo = e => {

        e.preventDefault();
        document.getElementById('addTodoInput').value = '';

        this.props.addTodoFn(this.state.todo);
    }

    render() {

        return (
            <div className='addTodoContainer'>
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <div class="form-group">
                        <label for='addTodoInput' class='font-weight-bold'>Enter Todo Item</label>
                        <input type='text' id='addTodoInput' class='form-control form-control-lg' onChange={(e) => this.updateInput(e)} placeholder='Todo Item' aria-describedby='todosuggestion'></input>
                        <div>
                            {this.state.todoError}
                        </div>
                        <small id='addTodoInput' class='form-text text-muted'>Let's have fun!</small>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddTodo;