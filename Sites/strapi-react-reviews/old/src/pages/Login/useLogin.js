import axios from 'axios';

export const useLogin = ({username, password, setData, setError}) => {

  const getLogin = async () => {
    try {
        await axios({
        method: 'POST',
        url: 'http://localhost:1337/api/auth/local',
        data: {
          "identifier": username,
          "password": password
        }
      }).then(res => setData(res))
    } catch (error) {
        console.log("Error: ",error);
        setError(error);
    }
  }

  getLogin();
}

