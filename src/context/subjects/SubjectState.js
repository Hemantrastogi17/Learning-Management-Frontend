import React, { useState } from 'react'
import subjectContext from './SubjectContext'

const SubjectState = (props) => {
    const host = "http://localhost:5000"
    const subjectsInitial = []
    
    const [subjects, setSubjects] = useState(subjectsInitial)
    const getSubjects = async()=>{   
            const response = await fetch(`${host}/api/subjects/getallsubjects`, {
              method: 'GET', 
              headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
              }
            });
            const json = await response.json()
            console.log(json);
            setSubjects(json)     
    }
    const getFacultySubjects = async()=>{   
      const response = await fetch(`${host}/api/subjects/getallsubjectsfaculty`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : localStorage.getItem('token')
        }
      });
      const json = await response.json()
      console.log(json);
      setSubjects(json)     
}
    return (
        <subjectContext.Provider value={{ subjects, getSubjects, getFacultySubjects }}>
            {props.children}
        </subjectContext.Provider>
    )
}
export default SubjectState;