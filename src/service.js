import axios from 'axios';

// default url
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

export async function login(identifiants) {
    try {
      const response = await axios.post('/login', identifiants);
      const token = response.data.body.token;
      return token;
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
        const data = response.data.body;
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}