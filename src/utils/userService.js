import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
  const url = BASE_URL + 'signup'
  const options = {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    body: JSON.stringify(user)
  }
  
  return fetch(url, options)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Email already taken!');
    })
    .then(({ token }) => tokenService.setToken(token) );
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(credentials) {
  const url = BASE_URL + "login"
  const options = {
    method: "POST",
    headers: new Headers({
        "Content-Type": "application/json"
    }),
    body: JSON.stringify(credentials)
  }
  
  return fetch(url, options)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Invalid credentials. Please try again");
    })
    .then(({ token }) => tokenService.setToken(token));
}

const UserService = {
  signup,
  getUser,
  logout,
  login
};

export default UserService;