import {React  , useState ,useEffect }from 'react'
import './Login.css'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  const[value,setValue]=useState(0);
       


  useEffect(()=> {console.log(value) ;},[value]) 
  return (
   
    <div className='container1'>
      <form action="#">
      <div className='login'>
            <h3 className='log'>Login</h3>
           <label htmlFor="email">Email :</label>
           <input type="email" id="email" placeholder="Enter Email" required onChange={(e)=>console.log(e.target.value)} ></input>
       <label htmlFor="password" >Password :</label>
       <input type={passwordVisible ? 'text' : 'password'}value={password} onChange={handlePasswordChange} placeholder='Enter Password' required id='pass' />
       <div className='chkbox'>
       <input type="checkbox"  checked={passwordVisible}onChange={handlePasswordToggle} id='checkbox'/> 
       <label id='sh'>Show Password </label>
       </div>
       <button onClick={()=>setValue(document.getElementById('pass').value)} id='s1'>Sign In</button>
           
        <div className='div3'>
          Forgot <a href="">Username / Password</a> ?<br />
          Don't have an Account ? <a href="">Sign up</a>
        </div>
      </div>

      </form>
    </div>

    
  )
}

export default Login