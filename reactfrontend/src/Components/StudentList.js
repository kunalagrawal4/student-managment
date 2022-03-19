// import { getByDisplayValue } from '@testing-library/react';
import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
// import { Params } from 'react-router-dom';
import StudentService from '../Services/StudentService'

const StudentList = () => {

    const [Student,setStudent]=React.useState([]);
    const navigate=useNavigate();

  React.useEffect(() => {
        
    console.log("useeffect")
      
          getAllStudent();
      
  },[])

  const getAllStudent = () => {

      StudentService.getAllStudents().then(response => {
        console.log("gettall")
          setStudent(response.data);
        console.log(response.data);}).catch(error => {console.log(error)});
      
  }


  function DisplayValue(id){
    navigate(`/display-student/${id}`);
    console.log(id);
  }

 

  

    return(
        <div className='container' style={{marginBottom:"45px"}}>
          <div>
            <Link to={'add-student'} className='btn btn-primary'>Add Student</Link>
          </div>
              <table className='table table-striped ' >
                  <thead>
                      <tr>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Student Id</th>
                            <th>Address</th>
                      </tr>
                  </thead>
                  <tbody>{
                      Student.map(student=>(
                       
                     <tr key={student.id} onClick={()=>DisplayValue(student.id)}>
                          <th>{student.name}</th>
                            <th>{student.email}</th>
                            <th>{student.phone}</th>
                            <th>{student.gender}</th>
                            <th>{student.studentAddress.studentId}</th>
                            <th>{student.studentAddress.streetLineFirst+","+student.studentAddress.streetLineSecond+","+student.studentAddress.city+","+student.studentAddress.country+"-"+student.studentAddress.pinCode}</th>
                      </tr>))}
                  </tbody>
              </table>
        </div>
    )
    
}

export default StudentList;