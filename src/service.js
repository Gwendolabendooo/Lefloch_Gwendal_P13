import axios from 'axios';

// default url
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

export async function login(identifiants) {
  try {
    const response = await axios.post('/login', identifiants);
    return response.data.body.token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function UserInfos(token) {
  try {
    const response = await axios.post('/profile', null, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function editUser (identifiants, token) {
  return await axios.put('/profile', {
    firstName: identifiants.firstName,
    lastName: identifiants.lastName,
  }, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
};