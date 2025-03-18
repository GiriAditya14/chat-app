import React, {useState} from 'react';
import './Home.css';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const[loginPage, setLoginPage] = useState(true)
  const funcSetLogin = (val) =>{
    setLoginPage(val);
  }

  return (
    <div className='home'>
      {
        loginPage? <Login funcSetLogin={funcSetLogin}/> : <Register funcSetLogin={funcSetLogin}/>
      }

    </div>
  )
}

export default Home