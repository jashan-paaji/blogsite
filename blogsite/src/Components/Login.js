import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [email, setemail]=useState('')
  const [pass,setpass] = useState('')
  const [msg,setmsg]=useState('')
  const navigate = useNavigate();
  function LoginCheck(e){
    e.preventDefault()
    let data={
      email:email,
      password:pass
    }
    axios.post('http://localhost:5000/login', data)
    .then(resp=>{
      if(resp.data=="1")
      navigate("/posts")
      else if(resp.data=="0")
      setmsg("Invalid Credentials")
      else
      setmsg("No User Found! Register Now")
    })
    .catch(err=>console.log(err))
  }


  return (
    <div className='container'>
      <h2 className="m-5 text-center fw-bold fs-1">LOGIN</h2>
        <form onSubmit={(e)=>LoginCheck(e)} className='col-md-5 mx-auto' >
          <h5 className='p-3 text-center text-white'>{msg}</h5>
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
            <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary mb-5 mt-2">Submit</button>
        </form>
        <Link to='/register' style={{textDecoration:'none', color:'#000'} } className='text-center mt-5'><h5>👉🏻Not a Member? Register Here👈🏻</h5></Link>

        </div>
  )
}

export default Login