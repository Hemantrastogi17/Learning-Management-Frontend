import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Meeting from './Meeting'
const SubjectPanel = () => {
    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    }
    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";          
    }
    const {subjectName} = useParams()
    // let { subjectFacultyId } = useParams()
    const url = window.location.href.split("/")
    const id = url[5].split("#")[0]
    console.log(url)
    const facultyLink = `/facultyInfo/${subjectName}/${id}`
    const onClick = ()=>{
        window.open("http://127.0.0.1:8000/takequiz?user=student3&id=quiz1", '_blank');
    }
    const onClickAssignment = ()=>{
        window.open("http://127.0.0.1:8000/upload?user=Deepak", '_blank');
    }
    return (
        <div>
            <div id="myNav" className="overlay">
                <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
                <div className="overlay-content text-light">
                    <Link to="#">About</Link>
                    <a  type="button" onClick={onClick} target="_blank">Quiz</a>
                    <a  type="button" c onClick={onClickAssignment} target="_blank">Assignments</a>
                    <Link to={facultyLink}>Subject Faculty </Link>
                </div>
            </div>
            <div className='row d-flex align-items-start '>
                <div className='d-flex align-items-center justify-content-start'>
                    <Link className="btn btn-dark" type='button' to='/'>&#8617;</Link>
                    <h1 style={{"marginLeft":"380px"}}>{subjectName} Course</h1>
                    </div>
                {/* <div className=' py-0 justify-content-center'></div> */}
            </div>
            <span style={{ "fontSize": "30px", "cursor": "pointer" }} onClick={openNav}>&#9776; Course Contents</span>
            {/* <Link className='btn btn-primary' to="/meeting"></Link> */}
            <h1></h1>
            <Meeting />
        </div>
    )
}

export default SubjectPanel