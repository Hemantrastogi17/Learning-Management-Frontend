import React from 'react'
import {Link} from 'react-router-dom'
const Subject = (props) => {
    const {subject} = props
    return (
        <div className='col-md-4 my-4 '>
            <div className="card d-flex justify-content-start" style={{"width": "18rem", "border":"2px solid grey"}}>
                <img src='data:image/jpeg;base64,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'  className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="card-title" style={{"color": "black"}} to="/">{subject.subjectName}</Link>
                    <p className="card-text"> {subject.subjectCode}<br/>{subject.subjectFaculty} </p>
                </div>
            </div>
        </div>
    )
}

export default Subject