import React,{useState} from 'react'
import './Login.css' 
import LoginIcon from '@mui/icons-material/Login';

const Login = ({funcSetLogin}) => {

  const [inputField, setInputField] = useState({mobileNumber:"", password:""})

  const handleClickNotRegistered = ()=>{
    funcSetLogin(false);
  }

  const handleOnChange= (event,key) =>{
    setInputField({
      ...inputField,[key]:event.target.value
    })
  }

  return (
    <div className='login'>

        <div className='login-card'>

          <div className='card-name'>
            Login
            <LoginIcon/>
          </div>

          <div className='login-form'>
            <input className='inputBox' type='text' value={inputField.mobileNumber} onChange={(event) => handleOnChange(event,"mobileNumber")} placeholder='Enter Mobile number' />
            <input className='inputBox' type='text' value={inputField.password} onChange={(event) => handleOnChange(event,"password")} placeholder='Enter Password'/>
            <div className='button'> Login </div>
            <div className='linkedLinks' onClick={handleClickNotRegistered}> Not Registered Yet </div>
          </div>

        </div>

    </div>
  )
}

export default Login