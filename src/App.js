import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import SubjectState from './context/subjects/SubjectState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import SubjectPanel from './components/SubjectPanel'
import FacultyInfo from './components/FacultyInfo';
import Meeting from './components/Meeting';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <SubjectState>
            <BrowserRouter>
          <Navbar/>
          <Alert alert={alert}/>
          <div className="container">
              <Routes>
                <Route path="/" element={<Home />} showAlert={showAlert}  />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} showAlert={showAlert}/>
                <Route path="/signup" element={<Signup />} showAlert={showAlert}/>
                <Route path="/subjects/:subjectName" element={<SubjectPanel />} />
                {/* <Route path="facultyInfo/:subjectFacultyId" element={<FacultyInfo />} showAlert={showAlert}/> */}
                <Route path="/meeting" element={<Meeting />} showAlert={showAlert}/>
                {/* <Route path="/subject-panel/:subject" element={<SubjectPanel />} /> */}
              </Routes>
          </div>
            </BrowserRouter>
      </SubjectState>
    </>
  )
}
export default App;