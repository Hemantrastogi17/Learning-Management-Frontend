import React, { useContext,useEffect } from 'react'
import subjectContext from '../context/subjects/SubjectContext'
import {useNavigate} from 'react-router-dom'
import Subject from './Subject'
const Home = (props) => {
  let navigate = useNavigate()
  const context = useContext(subjectContext)
  const { subjects, getSubjects } = context
  useEffect(() => {
    if(localStorage.getItem('token')){
      getSubjects()
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  },[])
  
  const  {showAlert} = props
  return (
    <div className='row' >
      <h1 className='text-center mt-4'>Enrolled Subjects</h1>
        {subjects.map((subject) => {
          return <Subject subject={subject} key={subject.subjectCode} showAlert={showAlert}/>
        })} 
    </div>
  )
}
export default Home;