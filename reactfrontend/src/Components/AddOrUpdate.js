import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import StudentService from "../Services/StudentService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import cs
import { useAlert } from 'react-alert'

const AddOrUpdate = () => {
  const [Studentdetailupdate, setStudentdetailupdate] = React.useState({studentAddress: {studentId:"",streetLineFirst:"",streetLineSecond:"",city:"",country:"",pinCode:""}});
  const [StudentAddressupdate, setStudentAddressupdate] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const alert=useAlert();

  const saveOrUpdatestudent = (e) => {
    e.preventDefault();
    Studentdetailupdate.studentAddress.studentId = StudentAddressupdate.studentId;
    Studentdetailupdate.studentAddress.streetLineFirst= StudentAddressupdate.streetLineFirst;
    Studentdetailupdate.studentAddress.streetLineSecond= StudentAddressupdate.streetLineSecond;
    Studentdetailupdate.studentAddress.city= StudentAddressupdate.city;
    Studentdetailupdate.studentAddress.country= StudentAddressupdate.country;
    Studentdetailupdate.studentAddress.pinCode= StudentAddressupdate.pinCode;



    

    var empty=false;

    for (const property in StudentAddressupdate) {
      if(StudentAddressupdate[property].length===0){
      empty=true;
    break;}
    }
  
    for(const property in Studentdetailupdate){
      if(Studentdetailupdate[property].length===0){
        empty=true;
      break;}
    }

  

  if(empty){
    alert.show("some field is empty")
   
  }
  
  else if(!/^[1-9][0-9]{8}$/.test(StudentAddressupdate.studentId)){
    alert.show("Student ID is not valid");

  }

  else if(Studentdetailupdate.phone.length!==10 || !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(Studentdetailupdate.phone)){
    alert.show("phone number is not valid");

  }
  else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Studentdetailupdate.email))
  {
    alert.show("email is not valid");
  }
  
  else if(!/^[1-9][0-9]{5}$/.test(StudentAddressupdate.pinCode)){
    alert.show("Pincode is not valid shouls conatin only number and must have 6 digits");

  }

  

  else{
  
  

    console.log(Studentdetailupdate);
    console.log(StudentAddressupdate);
    if (id) {

      confirmAlert({
        title: 'stay one moment!',
        message: `Are you sure do you want to SAVE this.`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              alert.show(`${Studentdetailupdate.name} is updated`);
              StudentService.updateStudent(id, Studentdetailupdate)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        })
            }
          },
          {
            label: 'No',
          }
        ]
      })
   
    } else {

      confirmAlert({
        title: 'stay one moment!',
        message: `Are you sure do you want to ADD this.`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
            
              StudentService.addStudent(Studentdetailupdate)
              .then((response) => {
                // console.log(response.data);
                alert.show(`${Studentdetailupdate.name} is created`);
                
                navigate("/");
              })
              .catch((error) => {
                alert.show(`user with this phone number ,student id and email  is already exist`);
                alert.show(`user with this phone number ,student id and email  is already exist`);
                navigate('/add-student');
              });
             
            }
          },
          {
            label: 'No',
          }
        ]
      })
      
    }}
  };

  React.useEffect(() => {


    if (id) {
      StudentService.getStudentId(id)
        .then((response) => {
          setStudentdetailupdate(response.data);
          setStudentAddressupdate(response.data.studentAddress);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            {id ? "Edit Student" : "Add Student"}
          </div>
          <hr></hr>
          <div className="card-body">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="btn btn-primary"
                style={{ width: "100px", right: "0", height: "40px" }}
                onClick={(e) => saveOrUpdatestudent(e)}
              >
                Save
              </button>
              <Link
                to={`/student`}
                className="btn btn-danger"
                style={{
                  width: "100px",
                  right: "0",
                  marginLeft: "10px",
                  height: "40px",
                }}
              >
                Cancel
              </Link>
            </div>
            <br></br>
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>Name:</span>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
                value={Studentdetailupdate.name}
                onChange={(e) =>setStudentdetailupdate((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))}
              ></input>
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
              <input
                type="text"
                placeholder="xyz@abc.com"
                name="email"
                className="form-control"
                value={Studentdetailupdate.email}
                onChange={(e) =>
                  setStudentdetailupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <input
               style={{ maxWidth: "200px" }}
                type="date"
                placeholder="yyyy-mm-dd"
                name="birthdate"
                className="form-control"
                value={Studentdetailupdate.birthdate}
                min="1998-01-01" 
                max="2018-01-01"
                onChange={(e) =>
                  setStudentdetailupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <span style={{width:"150px"}}>Phone number:</span>
              <input
                type="text"
                placeholder="phone number"
                name="phone"
                className="form-control"
                value={Studentdetailupdate.phone}
                onChange={(e) =>
                  setStudentdetailupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <select
                style={{ maxWidth: "100px" }}
                name="gender"
                className="form-control"
                value={Studentdetailupdate.gender}
                onChange={(e) =>
                  setStudentdetailupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              > <option value="">choose</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
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
              <span style={{width:"150px"}}>Student Id:</span>
              <input
                type="text"
                placeholder="18000000"
                name="studentId"
                className="form-control"
                value={StudentAddressupdate.studentId}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
            </div>
            <hr></hr>
            <span>Address:</span>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "70px",
              }}
            >
              <span style={{width:"150px"}}>society name:</span>
              <input
                type="text"
                placeholder="society name"
                name="streetLineFirst"
                className="form-control"
                value={StudentAddressupdate.streetLineFirst}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <span style={{width:"150px"}}>road name</span>
              <input
                type="text"
                placeholder="road name"
                name="streetLineSecond"
                className="form-control"
                value={StudentAddressupdate.streetLineSecond}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <span style={{width:"150px"}}>city name:</span>
              <input
                type="text"
                placeholder="city name"
                name="city"
                className="form-control"
                value={StudentAddressupdate.city}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
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
              <span style={{width:"150px"}}>State ,Country :</span>
              <input
                type="text"
                placeholder="State,Country"
                name="country"
                className="form-control"
                value={StudentAddressupdate.country}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "row",
              
          gap:"70px"
              }}
            >
              <span style={{width:"150px"}}>Pin code:</span>
              <input
                type="text"
                placeholder="Pin code"
                name="pinCode"
                className="form-control"
                value={StudentAddressupdate.pinCode}
                onChange={(e) =>
                  setStudentAddressupdate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrUpdate;
