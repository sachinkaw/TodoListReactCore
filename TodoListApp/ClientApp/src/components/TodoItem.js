import React, { Component } from 'react';
import './style.css';

class TodoItem extends Component {

    render() {
        const { todos, updateTodoItemFn } = this.props;
        console.log(todos);

        return (
            <div className='todoListContainer'>
                {
                    todos.length !== 0
                        ?
                        (todos.map((_todo, _index) => {
                            return (
                                <div
                                    className={_todo.status === "Close" ? "todoItem completed" : "todoItem"}
                                    id={`todoItem-${_todo.id}`}
                                    key={_todo.id}
                                    onClick={(e) => updateTodoItemFn(_todo.id)}
                                >
                                    <p>{_todo.description}</p>
                                </div>
                            );
                        }))
                        :
                        <div>No Todo Items found</div>
                }
            </div>
        );
    }
}

export default TodoItem;