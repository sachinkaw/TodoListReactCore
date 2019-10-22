import React, { Component } from 'react';
import axios from 'axios';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor() {
        super();
        this.state = { todos: [] };

        this.fetchTodoList();

    }

    /*
        API call to the backend controller for fetching initial todo items in the  Database
    */

    fetchTodoList = () => {

        fetch('api/TodoItems')
            .then(response => response.json())
            .then(data => {
                this.setState({ todos: data });
                console.log('Has Todos', this.state.todos);
            })
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    /*
     API call to the backend controller for adding a new todo item in the Database
      */

    addTodo = (todo) => {
        axios
            .post('api/TodoItems/addTodoItem', { description: todo })
            .then(response => {
                this.fetchTodoList();
            })
            .catch(error => this.setState({ error, isLoading: false }));
    };

    /*
        API call to the backend controller for updating the state as completed
    */

    updateTodoItemStatus = (todoId) => {
        console.log('Inside updateTodoItemStatus', todoId);
        axios
            .put(`api/TodoItems/updateTodoItem/${todoId}`)
            .then(response => {
                this.fetchTodoList();
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        console.log('Inside Render', this.state.todos);
        return (
            <div>
                <AddTodo addTodoFn={this.addTodo}></AddTodo>
                <TodoItem todos={this.state.todos} updateTodoItemFn={this.updateTodoItemStatus}></TodoItem>
            </div>
        );
    }
}
export default TodoList;