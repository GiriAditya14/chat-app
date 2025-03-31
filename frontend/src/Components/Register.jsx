import React,{useState} from 'react';
import './Register.css';
import ProfileSelector from './ProfileSelector/ProfileSelector';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';

const Register = ({funcSetLogin}) => {

    const[profileModal, setProfileModal] = useState(false);
    const [inputField, setInputFields]= useState({"mobileNumber": "", password:"", name:"", profilePic:"data:image/jpeg;base64,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"})

    const gotoLogin = () =>{
        funcSetLogin(true);
    }

    const handleSetImage = (link) =>{
      setInputFields({
        ...inputField,["profilePic"]:link
      })
    }

    const handleProfileModalClose = () =>{
      setProfileModal(prev => !prev);
    }

    const handleOnChange= (event,key) =>{
      setInputFields({
        ...inputField,[key]:event.target.value
      })
    }

  return (
    <div className='login'>

        <div className='register-card'>

          <div className='card-name heading'>
            Register
            {" "}
            <CategoryRoundedIcon/>
          </div>

          <div className='login-form'>
            <input className='inputBox' type='text' value={inputField.mobileNumber} onChange={(event) => handleOnChange(event,"mobileNumber")} placeholder='Enter 10 Digit Mobile number' />
            <input className='inputBox' type='text' value={inputField.password} onChange={(event) => handleOnChange(event,"password")} placeholder='Enter Password'/>
            <input className='inputBox' type='text' value={inputField.name} onChange={(event) => handleOnChange(event,"name")} placeholder='Enter Full Name' />

            <div className='imageFile'>
              <div className='select-profile-btn' onClick={handleProfileModalClose}>Select Profile Image</div>
              <img className='avatar' src= {inputField.profilePic}/>
            </div>

            <div className='registerbutton'> Register </div>
            <div className='linkedLinks' onClick={gotoLogin}> Already have an account? Login </div>
          </div>

        </div>

        {profileModal && <ProfileSelector handleSetImage={handleSetImage} handleProfileModalClose = {handleProfileModalClose }/>}

    </div>
  )
}

export default Register