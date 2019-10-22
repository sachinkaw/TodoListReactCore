using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoListApp.Models;

namespace TodoListApp.Data
{
    // Interface to host all the functions that need to be implemented in TodoRepository class
    public interface ITodoRepository
    {
        // Get all the todo items from the DB
        Task<List<TodoItem>> GetTodoListItems();
        // Add todo item in the DB
        Task<TodoItem> AddTodoItem(TodoItem todoItem);
        // Update todo item as completed
        Task<TodoItem> UpdateTodoItemStatus(int todoItemId);
    }
}
