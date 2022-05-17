import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const FacultyInfo = () => {
    const subjectName = useParams()
    const url = window.location.href.split("/")
    const id = url[5].split("#")[0]

    const [progress, setProgress] = useState(0)
    const dataInitial = []
    const [data, setData] = useState(dataInitial)
    console.log(typeof(facultyId));
    const host = "http://localhost:5000"
    // let json={} 
    useEffect(() => {
      return async() => {
        const response = await fetch(`${host}/api/faculty/fetch-teacherInfo/${id}`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setProgress(80)
        const json = await response.json()
        setTimeout(() => {
          setData(json)
          setProgress(100)
         console.log(json);
        }, 1000);
      }
    }, [])
    
  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className='container text-center'>
        <h2 className='text-centermy-4'><u>{subjectName.subjectName} Faculty Details</u></h2>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='my-4' width={200} height={200} alt="User Image here..." />
        <h3 className='text-center'>Name : {data.name}</h3> 
        <h3 className='text-center'>Seating Floor : {data.seatingFloor}</h3> 
        <h3 className='text-center'>Seating Room : {data.seatingRoom}</h3> 
        <h3 className='text-center'>Seating Block : {data.seatingBlock}</h3> 
        <h3 className='text-center'>Contact : {data.contact}</h3> 
    </div>
    </>
  )
}

export default FacultyInfo