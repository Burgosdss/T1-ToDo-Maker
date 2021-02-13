import tokenService from './tokenService';
const BASE_URL = '/api/todos';

const servTodo ={
  index,
  create,
  deleteToDo,
  editToDo,
  doneToDo
};

// client side function to create a todo
function create(todo, user) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${user._id}`, options).then(res => res.json());
}


// client side function to get/ render todos for a specific user
function index(user) {
  return fetch(BASE_URL + `/${user._id}`).then(res => res.json());
}

// client side function to delete a todo
function deleteToDo(todo) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}

// client side function to toggle a todo done or not done
function doneToDo(todo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify(todo)
  };
  return fetch(BASE_URL + `/update/${todo._id}`, options).then(res => res.json());
}

// client side function to edit a todo
function editToDo(todo, updatedTodo) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    },
    body: JSON.stringify({
      text: updatedTodo
    })
  };
  return fetch(BASE_URL + `/${todo._id}`, options).then(res => res.json());
}

export default servTodo;