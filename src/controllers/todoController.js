let todos = [];

const getTodos = (req, res) => {
  res.status(200).json(todos);
};

const addTodo = (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now().toString(), title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.title = title;
  res.status(200).json(todo);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos.splice(index, 1);
  res.status(204).send();
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
