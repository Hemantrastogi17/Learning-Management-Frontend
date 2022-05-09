import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = (props) => {
    // { document.body.style.backgroundColor = 'black' }
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.jwtToken);
            // props.showAlert("Logged in  successfully!","success")
            navigate('/')
        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }

    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='row d-flex align-items-center'>
            <div className="grid col-md-6 d-flex align-items-center justify-content-end bg-danger">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-laptop-2741035-2280943.png" alt="" />
            </div>
            <div className="container col-md-6 justify-content-start px-4">
                <h1 className='text-center my-4'>Login</h1>
                <form  onSubmit={handleOnSubmit}>
                    <div className="mb-3 px-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={credentials.email} className="form-control"  onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 px-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={credentials.password}  className="form-control" onChange={onChange} id="exampleInputPassword1" name="password" />
                    </div>

                    <button type="submit" className="btn btn-danger mx-4 px-3" >Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Login