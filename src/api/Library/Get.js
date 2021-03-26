import axios from 'axios';

const baseURL = 'https://oduum.pythonanywhere.com/api/library/';

export const getCategory = async () => {
  try {
    const { data } = await axios.get(baseURL + 'category/');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBook = async () => {
  try {
    const { data } = await axios.get(baseURL + 'book/');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBorrowedBook = async () => {
  try {
    const { data } = await axios.get(baseURL + 'student_borrowed_book/');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSections = async () => {
  try {
    const { data } = await axios.get(baseURL + 'section');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudentLibraryAttendance = async () => {
  try {
    const { data } = await axios.get(baseURL + 'student_library_attendance');
    return data;
  } catch (error) {
    console.error(error);
  }
}
