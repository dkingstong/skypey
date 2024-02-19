import React from 'react'
import './User.css'
import store from '../store';
import { setActiveUserId, deleteContact } from '../actions';

function handleCrossClick(e, user_id) {
  e.stopPropagation();
  store.dispatch(setActiveUserId(null));
  store.dispatch(deleteContact(user_id));
}

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  return (
    <div className='User' onClick={handleCrossClick.bind(null, user)}>
      <img src ={profile_pic} alt={name} className='User__pic'/>
      <div className='User__details'>
        <p className='User__details-name'>{name}</p>
        <p className='User__details-status'>{status}</p>
      </div>
    </div>
  )
}
export default User
