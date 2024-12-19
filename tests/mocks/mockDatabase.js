const todos = [];

const getTodos = jest.fn(() => todos);
const addTodo = jest.fn((todo) => todos.push(todo));
const updateTodo = jest.fn((id, title) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) todo.title = title;
});
const deleteTodo = jest.fn((id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) todos.splice(index, 1);
});

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
