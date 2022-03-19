import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import StudentService from "../Services/StudentService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useAlert } from 'react-alert'

const EditOrDeleteId = () => {
  const [Studentdetail, setStudent] = React.useState([]);
  const [StudentAddress, setStudentAddress] = React.useState([]);
  const navigate = useNavigate();
  const Alert =useAlert();

  const paramsId = useParams();
  React.useEffect(() => {
    getStudentById(paramsId.id);
  }, []);

  const getStudentById = (id) => {
    StudentService.getStudentId(id)
      .then((response) => {
        setStudent(response.data);
        setStudentAddress(response.data.studentAddress);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found")
      });
  };


  const deleteStudent = (id) => {
    

    confirmAlert({
      title: 'stay one moment!',
      message: `Are you sure do you want to ${id? "DELETE":"EDIT"} this.`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            if(id){
            Alert.show(`${Studentdetail.name} is deleted`)
            StudentService.deleteStudent(id)
            .then((response) => {
              console.log(id);
              navigate("/");
              
            })
            .catch((error) => {
              console.log(error);
            })}
            else{
              navigate(`/edit-student/${Studentdetail.id}`)
            }
          }
        },
        {
          label: 'No',
        }
      ]
    })
  };
  



  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">Edit Student</div>
          <hr></hr>
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {/* <Link
                to={`/edit-student/${Studentdetail.id}`}
                className="btn btn-primary"
                style={{ width: "100px", right: "0", height: "40px" }}
              >
                Edit
              </Link> */}
              <button
                className="btn btn-primary"
                style={{
                  width: "100px",
                  right: "0",
                 
                  height: "40px",
                }}
                onClick={() => deleteStudent()}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                style={{
                  width: "100px",
                  right: "0",
                  marginLeft: "10px",
                  height: "40px",
                }}
                onClick={() => deleteStudent(Studentdetail.id)}
              >
                Delete
              </button>
            </div>
            <div
              style={{
                marginLeft: "20px",

                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Name:</span>
              <span>{Studentdetail.name}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Email:</span>
              <span>{Studentdetail.email}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Phone:</span>
              <span>{Studentdetail.phone}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Gender:</span>
              <span>{Studentdetail.gender}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>birthdate:</span>
              <span>{Studentdetail.birthdate}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Address:</span>
              <span>{ StudentAddress.streetLineFirst+","+StudentAddress.streetLineSecond+","+StudentAddress.city+","+StudentAddress.country+"-" +StudentAddress.pinCode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrDeleteId;
