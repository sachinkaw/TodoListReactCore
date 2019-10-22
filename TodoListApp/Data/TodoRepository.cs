using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoListApp.Models;

namespace TodoListApp.Data.Migrations
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoContext _context;
        public TodoRepository(TodoContext context)
        {
            _context = context;
        }

        // Add todo item in the DB
        public async Task<TodoItem> AddTodoItem(TodoItem todoItem)
        {
            await _context.TodoItems.AddAsync(todoItem);
            await _context.SaveChangesAsync();

            return todoItem;
        }

        // Get all the todo items from the DB
        public async Task<List<TodoItem>> GetTodoListItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // Update todo item as completed
        public async Task<TodoItem> UpdateTodoItemStatus(int todoItemId)
        {
            TodoItem todoItem = await _context.TodoItems.FirstOrDefaultAsync(x => x.Id == todoItemId);
            todoItem.Status = "Close";
            todoItem.CompletionTime = DateTime.Now;
            await _context.SaveChangesAsync();

            return todoItem;
        }
    }
}
