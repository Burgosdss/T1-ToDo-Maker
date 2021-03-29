import { TokenService } from 'utils';
const BASE_URL = '/api/todos';

// client side function to create a todo
function create(todo, user) {
  const url = BASE_URL + `/${user._id}`
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + TokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(url, options).then(response => response.json());
}

// client side function to get/ render todos for a specific user
function index(user) {
  const url = BASE_URL + `/${user._id}`
  return fetch(url).then(response => response.json());
}

// client side function to delete a todo
function deleteToDo(todo) {
  const url = BASE_URL + `/${todo._id}`
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + TokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(url, options).then(response => response.json());
}

// client side function to toggle a todo done or not done
function doneToDo(todo) {
  const url = BASE_URL + `/update/${todo._id}`
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + TokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(url, options).then(response => response.json());
}

// client side function to edit a todo
function editToDo(todo, updatedTodo) {
  const url = BASE_URL + `/${todo._id}`
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + TokenService.getToken()
    },
    body: JSON.stringify({
      text: updatedTodo
    })
  };
  return fetch(url, options).then(response => response.json());
}

const TodoService ={
  index,
  create,
  deleteToDo,
  editToDo,
  doneToDo
};

export default TodoService;