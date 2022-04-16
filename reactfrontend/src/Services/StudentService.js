import axios from "axios";
const Student_BASE_REST_APT_URL = "http://localhost:8080/yourapi";

class StudentService {
  getAllStudents() {
    return axios.get(Student_BASE_REST_APT_URL);
  }

  addStudent(student) {
    return axios.post(Student_BASE_REST_APT_URL, student);
  }

  getStudentId(studentId) {
    return axios.get(Student_BASE_REST_APT_URL + "/" + studentId);
  }

  updateStudent(studentId, student) {
    return axios.put(Student_BASE_REST_APT_URL + "/" + studentId, student);
  }

  deleteStudent(studentId) {
    return axios.delete(Student_BASE_REST_APT_URL + "/" + studentId);
  }
}

export default new StudentService();
