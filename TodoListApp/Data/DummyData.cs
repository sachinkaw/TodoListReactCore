using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoListApp.Models;

namespace TodoListApp.Data
{
    // The purpose of this class is to create dummy data for the Database
    public class DummyData
    {
        // This function is called in the Startu.cs to be effective
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<TodoContext>();
                context.Database.EnsureCreated();

                // Look for any todos
                if (context.TodoItems != null && context.TodoItems.Any())
                    return;   // DB has already been seeded

                var todos = GetTodos().ToArray();
                context.TodoItems.AddRange(todos);
                context.SaveChanges();
            }
        }

        // Dummy Data
        public static List<TodoItem> GetTodos()
        {
            List<TodoItem> todos = new List<TodoItem>() {
                new TodoItem {Description="One", Status="Close", CreationTime=DateTime.Now, CompletionTime=DateTime.Now},
                new TodoItem {Description="Two", Status="Close", CreationTime=DateTime.Now, CompletionTime=DateTime.Now},
                new TodoItem {Description="Three", Status="Close", CreationTime=DateTime.Now, CompletionTime=DateTime.Now}
            };
            return todos;
        }
    }
}