import axios from 'axios';

const baseURL = 'https://oduum.pythonanywhere.com/api/library/';

export const postCategory = async (data) => {
  try {
    const response = await axios.post(baseURL + 'category/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const postBook = async (data) => {
  try {
    const response = await axios.post(baseURL + 'book/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export const postBorrowedBook = async (data) => {
  try {
    const response = await axios.post(baseURL + 'student_borrowed_book/', data);
    console.log(response)
  } catch (error) {
    console.error(error);
  }
}

export const postSection = async (data) => {
  try {
    const response = await axios.post(baseURL + 'section/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const postStudentLibraryAttendance = async (data) => {
  try {
    const response = await axios.post(baseURL + 'student_library_attendance/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}