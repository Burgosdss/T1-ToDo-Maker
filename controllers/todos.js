const Todo = require('../models/todo');

module.exports = {
  create,
  show,
  deleteTodo,
  editTodo,
  updateToDo
};


async function updateToDo(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, function (err, todo) {
    res.json(todo);

  })
};

async function create(req, res) {
  try {
    const todo = new Todo(req.body);
    todo.user = req.params.userid;
    await todo.save();
    show(req, res);
  } catch (err) {
    res.json({
      err
    });
  }
}


async function show(req, res) {
  const todos = await Todo.find({
    user: req.params.userid
  });
  res.json(todos);
}

async function deleteTodo(req, res) {
  await Todo.findByIdAndDelete(req.params.id);
  show(req, res);
}

async function editTodo(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, req.body);
  show(req, res);
}