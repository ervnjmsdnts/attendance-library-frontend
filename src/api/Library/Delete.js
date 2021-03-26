import axios from 'axios';

const baseURL = 'http://localhost:8000/api/library/';

export const deleteItem = async (apiName, id) => {
  try {
    const response = await axios.delete(baseURL + `${apiName}/${id}`);
    window.location.reload();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(baseURL + `user-delete/${id}`);
    window.location.reload();
    console.log(response)
  } catch (error) {
    console.error(error);
  }
}
