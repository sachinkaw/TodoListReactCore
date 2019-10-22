using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoListApp.Models
{
    public class TodoItem
    {
        // Primary Key for the DB
        public int Id { get; set; }
        // Todo item name
        public string Description { get; set; }
        // Status of the todo item [Open or Close]
        public string Status { get; set; }
        // Time when the todo item was created
        public DateTime CreationTime { get; set; }
        // Time when the todo item was completed
        public DateTime CompletionTime { get; set; }
    }
}
