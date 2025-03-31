import React, { useState, useEffect, useRef } from 'react'
import './Dashboard.css'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import Conservation from '../Conversation/Conservation';
import Chats from '../Chats/Chats';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);  //useState(true)-->giri/mudliar
  const [queryParam, setQueryParam] = useState('');
  const [searchData, setSearchData] = useState([0]);
  const ref = useRef();  //used to hide the className='searched-box' when i click anywhere
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearchData([]);
      setQueryParam('')
    }
  };

  useEffect(() => {
    if (searchData.length) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchData])

  const handleLogout =() =>{
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-card'>
        <div className='dashboard-conversations'>
          <div className='dashboard-conv-block'>

            <div className='dashboard-title-block'>
              <div> Chat </div>
              <div onClick={handleLogout} ><LogoutIcon sx={{ fonstsize: "32px", cursor: "pointer" }} /></div>
            </div>

            <div className='searchBoxDiv'>
              <input value={queryParam} onChange={(event) => { setQueryParam(event.target.value) }} type='text' placeholder='Search' className='searchBox' />
              <button type='submit' className='searchIcon'><PersonSearchRoundedIcon /></button>

              {
                searchData.length ? <div ref={ref} className='searched-box'>

                  {
                    searchData.map((item, index) => {
                      return (
                        <div className='search-item'>
                          <img className='search-item-profile' src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D' />
                          <div> Aditya </div>
                          <div className='search-item-mobile' >xxxxxxxx67</div>
                        </div>
                      );
                    })
                  }


                </div> :
                queryParam.length !== 0 && searchData.length === 0 ?
                <div ref={ref} className='searched-box'>
                  <div className='search-item'>
                    <img className='search-item-profile' src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D'/>
                    <div>No Data Found</div>
                  </div>
                </div>: null
                         
              }

            </div>

            <div className='conv-block'>

              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />
              <Conservation />

            </div>

          </div>
          </div>

          {
            selectedUserDetails ? <Chats /> : <div className='noChatSelected'>
              <img src='https://cdni.iconscout.com/illustration/premium/thumb/people-chatting-on-phone-8044282-6369994.png' className='noChatImage' />
              <div> No Chat Selected </div>
            </div>
          }


        </div>
      </div>
      )
}

      export default Dashboard