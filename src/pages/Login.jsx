import {React  , useState }from 'react'
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
  return (
   
    <div className='container1'>
      <form action="#">
      <div className='login'>
            <h3>Login</h3>
           <label htmlFor="email">Email :</label>
           <input type="email" id="email" placeholder="Enter Email" required></input>
       <label htmlFor="password">Password :</label>
       <input type={passwordVisible ? 'text' : 'password'}value={password} onChange={handlePasswordChange} placeholder='Enter Password' required />
       <div className='chkbox'>
       <input type="checkbox"  checked={passwordVisible}onChange={handlePasswordToggle} id='checkbox'/> 
       <label id='sh'>Show Password </label>
       </div>
           <input type="submit" value="Sign in" id="s1" ></input>
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