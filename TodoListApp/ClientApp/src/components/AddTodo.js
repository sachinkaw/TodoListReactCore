import React, { Component } from 'react';

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            todo: '',
            inputError: false
        };
    }

    // On Submit function
    submitTodo = e => {

        const { todo } = this.state;
        const { addTodoFn } = this.props;

        e.preventDefault();
        document.getElementById('addTodoInput').value = '';

        if (todo !== undefined && todo !== null) {
            addTodoFn(todo);
            this.setState({
                todo: null
            });
        } else {
            this.setState({
                todo: null,
                inputError: true
            });
        }
    }

    render() {
        const { todo } = this.state;

        return (
            <div className='addTodoContainer'>
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <div className="form-group">
                        <label htmlFor='addTodoInput' className='font-weight-bold'>Enter Todo Item</label>
                        <input
                            type='text'
                            id='addTodoInput'
                            className='form-control form-control-lg'
                            
                            placeholder='Todo Item'
                            aria-describedby='todosuggestion'
                            defaultValue={todo}
                            onChange={e => {
                                this.setState({
                                todo: e.target.value,
                                inputError: false
                                });
                            }}
                        />
                        {this.state.inputError ?
                        (
                        <div>
                            <span className="text-danger">
                                Kindly enter a valid string
                            </span>
                        </div>
                        ) : (
                          ''
                        )}
                        <small id='addTodoInput' className='form-text text-muted'>Let's have fun!</small>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;