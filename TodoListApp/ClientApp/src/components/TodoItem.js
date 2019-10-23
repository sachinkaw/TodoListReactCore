import React, { Component } from 'react';
import moment from 'moment';

import './style.css';

class TodoItem extends Component {

    tableBody = () => {
        const { todos, updateTodoItemFn } = this.props;
        console.log(todos);

        return todos.map((_todo, _index) => {
            return (
                <tr key={_todo.id}
                    className={_todo.status === "Close" ? "todoItem completed" : "todoItem"}
                    id={`todoItem-${_todo.id}`}
                    onClick={(e) => updateTodoItemFn(_todo.id)}
                >
                    <td>{_todo.id}</td>
                    <td>{_todo.description}</td>
                    <td>{moment(_todo.creationTime).format('llll')}</td>
                    <td>{_todo.status === "Close" ? moment(_todo.completionTime).format('llll') : "TBC"}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className='table table-striped'>

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Todo Item</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">Completion Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.tableBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoItem;