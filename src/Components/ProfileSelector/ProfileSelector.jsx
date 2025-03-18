import React from 'react'
import './ProfileSelector.css'
import boysimages from './boysimages.json'
import girlsimages from './girlsimages.json'


const ProfileSelector = ({handleProfileModalClose, handleSetImage}) => {
    // called from register.jsx component

    const handleCloseBtn = () =>{
        handleProfileModalClose ();
    }

    const handleClickImage = (link) =>{
        handleSetImage(link);
        handleProfileModalClose();
    }

  return (
    <div className='profileSelector'>
        <div className='profile-card'>
            <div className='profile-selector-header'>
                <div> Select Profile Image</div>
                <div style={{cursor: "pointer"}} onClick={handleCloseBtn}>  Close <button className='closeX'> X</button></div>
            </div>

            <div className='profile-section'>
                <div className='profile-section-gender'>

                    {
                        boysimages.map((item, index) => {
                            return(
                                <div className='profile-section-gender-div' onClick={() => handleClickImage(item.link)}>
                                    <img className='profile-section-image' src= {item.link}/>
                                </div>
                            );
                        })
                    }

                </div>

                <div className='profile-section-gender'>

                    {
                        girlsimages.map((item, index) => {
                            return(
                                <div className='profile-section-gender-div' onClick={() => handleClickImage(item.link)}>
                                    <img className='profile-section-image' src= {item.link}/>
                                </div>
                            );
                        })
                    }

                </div>


            </div>
        </div>
    </div>
  )
}

export default ProfileSelector