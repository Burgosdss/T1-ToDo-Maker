function removeToken() {
  localStorage.removeItem('token');
};

function setToken(token) {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

function getToken() {
  let token = localStorage.getItem('token');
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const payloadExpired = payload.exp < Date.now() / 1000
    if (payloadExpired) {
      localStorage.removeItem('token');
      token = null;
    }
  }
  return token;
};

function getUserFromToken() {
  const token = getToken();
  const splitToken = JSON.parse(atob(token.split('.')[1])).user
  return token ? splitToken : null;
};

const TokenService = {
  setToken,
  getToken,
  removeToken,
  getUserFromToken
}

export default TokenService;