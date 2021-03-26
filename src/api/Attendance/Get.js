import axios from 'axios';

const baseURL = 'https://oduum.pythonanywhere.com/api/attendance/';

export const getSections = async () => {
  try {
    const { data } = await axios.get(baseURL + 'section');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudentAttendance = async () => {
  try {
    const {data} = await axios.get(baseURL + 'student_attendance');
    return data;
  } catch (error) {
    console.error(error);
  }
}
