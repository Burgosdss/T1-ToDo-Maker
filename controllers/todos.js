const Todo = require("../models/todo");

module.exports = {
  create,
  show,
  deleteTodo,
  editTodo,
  updateToDo
};

async function updateToDo(request, response) {
  await Todo.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    },
    function (error, todo) {
      response.json(todo);
    }
  );
}

async function create(request, response) {
  try {
    const todo = new Todo(request.body);
    todo.user = request.params.userid;
    await todo.save();
    show(request, response);
  } catch (error) {
    response.json({
      error
    });
  }
}

async function show(request, response) {
  const todos = await Todo.find({
    user: request.params.userid
  });
  response.json(todos);
}

async function deleteTodo(request, response) {
  await Todo.findByIdAndDelete(request.params.id);
  show(request, response);
}

async function editTodo(request, response) {
  await Todo.findByIdAndUpdate(request.params.id, request.body);
  show(request, response);
}
