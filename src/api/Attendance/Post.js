import axios from 'axios';

const baseURL = 'http://localhost:8000/api/attendance/';

export const postSection = async (data) => {
  try {
    const response = await axios.post(baseURL + 'section/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const postStudentAttendance = async (data) => {
  try {
    const response = await axios.post(baseURL + 'student_attendance/', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
