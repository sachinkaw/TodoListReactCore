# TodoListReactCore
Todo List - ASP.Net Core, ReactJS, Web API, SQL

SetUP:

1) Clone the project.
2) Open the project in Visual Studio.
3) Open 'appsettings.json' file and update the Databse Connection String mentioned in the "DefaultConnection".
4) Go to, Tools => NuGet Package Manager => Package Manager Console
    a) Run 'Update-Database' command on the console.
    b) This will create the Database and the Table 'TodoItems'.
5) Now run the project and some default values (dummy data) will get populated.
6) Once the project is up, you can add a TodoItem in the input field and submit.
7) The todo item will get displayed and saved in the database.
8) On clicking the todo item, it will be striked off and an update will go to DB to mark it as completed with an completion date and time.
