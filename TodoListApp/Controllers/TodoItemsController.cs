using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoListApp.Data;
using TodoListApp.Models;

namespace TodoListApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly ITodoRepository _context;

        public TodoItemsController(ITodoRepository context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<IActionResult> GetTodoItems()
        {
            var todoItems = await _context.GetTodoListItems();

            return Ok(todoItems);
        }

        // PUT: api/TodoItems/5
        [HttpPut("updateTodoItem/{todoId}")]
        public async Task<IActionResult> UpdateTodoItem(int todoId)
        {
            var updateTodoItem = await _context.UpdateTodoItemStatus(todoId);

            return StatusCode(201);
        }

        // POST: api/TodoItems
        [HttpPost("addTodoItem")]
        public async Task<ActionResult> AddTodoItem(TodoItem todoItem)
        {
            var todoItemAdd = new TodoItem
            {
                Description = todoItem.Description,
                CreationTime = DateTime.Now,
                Status = "Open"
            };

            var saveTodoItem = await _context.AddTodoItem(todoItemAdd);

            return StatusCode(201);
        }
    }
}
