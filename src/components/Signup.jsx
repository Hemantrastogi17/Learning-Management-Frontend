import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.jwtToken);
            navigate('/')
            props.showAlert("Account created successfully!","success")
        }
        else {
            props.showAlert("Invalid details","danger")
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="row">
            <div className="col-md-6 d-flex justify-content-end">
                <img src="https://media.istockphoto.com/vectors/happy-and-smiling-group-of-students-standing-with-notebooks-back-to-vector-id1154704937?k=20&m=1154704937&s=612x612&w=0&h=KowPQpneP9qmU7nFzdfxJUoWX9VIVPcWNtn9i75Y_HQ=" width={500} height={500} alt="" />
            </div>
            <div className="col-md-6">
                <h1 className='text-center'>Signup</h1>
                <form className='container mt-4 mx-4' onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" name="name" id="name" onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={8} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={8} required  />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup