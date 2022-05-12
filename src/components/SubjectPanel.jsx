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
    let { subjectName } = useParams()
    // let assignments
    const facultyLink = `facultyInfo/${subjectName.subjectFacultyId}`
    return (
        <div>
            <div id="myNav" className="overlay">
                <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
                <div className="overlay-content">
                    <Link to="#">About</Link>
                    <Link to="#">Quiz</Link>
                    <Link to="#">Assignments</Link>
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
            <Meeting />

        </div>
    )
}

export default SubjectPanel