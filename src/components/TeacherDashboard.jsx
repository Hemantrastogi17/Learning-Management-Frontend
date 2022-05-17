import React,{useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import SubjectContext from '../context/subjects/SubjectContext'
import TeacherSubject from './TeacherSubject'


const TeacherDashboard = () => {
    const context = useContext(SubjectContext)
    let navigate = useNavigate()
    const {subjects, getFacultySubjects} = context
    useEffect(() => {
        if(localStorage.getItem('token')){
          getFacultySubjects()
        }
        else{
          navigate('/teacher-login')
        }
        // eslint-disable-next-line
      },[])
  return (
    <div><div className='row' >
    <h1 className='text-center mt-4'>Your Classes</h1>
       {subjects.map((subject) => {
        return <TeacherSubject subject={subject} key={subject.subjectCode} />
      })}  
  </div></div>
  )
}

export default TeacherDashboard