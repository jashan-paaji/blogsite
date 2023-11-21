import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


  


function Register() {
  const [email, setemail]=useState('')
  const [pass,setpass] = useState('')

  function Register(e){
    let data={
      email:email,
      password:pass
    }

    axios.post('http://localhost:5000/register', data)
    .then(resp=>{
      if(resp)
      alert("Successfully Registered, Now you can Login")
      else
      alert("Oops! Something went wrong")
    })
    .catch(err=>console.log(err))
  }



  return (
    <div className='container'>
        <h2 className="m-5 text-center fw-bold fs-1">REGISTER</h2>
        <form onSubmit={(e)=>Register(e)} className='col-md-5 mx-auto' >
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" value={email} className="form-control" onChange={(e)=>{setemail(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={pass} className="form-control" onChange={(e)=>{setpass(e.target.value)}} id="exampleInputPassword1" placeholder="Password"required/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary mb-5">Submit</button>
        </form>
        <Link to='/' style={{textDecoration:'none', color:'#000'} } className='text-center mt-5'><h5>👉🏼Already a Member? Login Here👈🏼</h5></Link>

    </div>
  )
}

export default Register