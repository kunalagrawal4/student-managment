import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';

import StudentList from './Components/StudentList';
import Header from './Components/Header';
import EditOrDeleteId from './Components/EditOrDeleteId';
import AddOrUpdate from './Components/AddOrUpdate';
function App() {

  // const [Studentdetailupdate, setStudentdetailupdate] = React.useState({"id":"ewqe","name":"ewqe","email":"ewqe","phone":"ewqe","studentAddress":{"sid":"srrrs","studentId":"ewsrrsqe","address":"ewsrrrsqe"}});
  // const [StudentAddressupdate, setStudentAddressupdate] = React.useState({"sid":"ss","studentId":"ewssqe","address":"ewssqe"});

  
  // console.log(Studentdetailupdate);

  return (

    <div className='main'>
      <Router>
      <Header></Header>
<br></br>
      <Routes>
        
        <Route exact path="/" element={<StudentList></StudentList>}></Route>
        <Route path="/student" element={<StudentList></StudentList>}></Route>
      
        <Route path="/display-student/:id" element={<EditOrDeleteId/>}></Route>
        <Route path="/add-student" element={<AddOrUpdate/>}></Route>
        <Route path="/edit-student/:id" element={<AddOrUpdate/>}></Route>
        <Route Path="/already-exist" element={<Navigate to="/add-student" replace />}></Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>

      </Routes>
 

</Router>
    </div>
  );
}

export default App;
