import React,{ useEffect } from 'react';
import axios from 'axios'
import { useRecoilState } from "recoil";
import Admin from '../components/Admin'
import Auth403 from '../components/403'
import {user,allUsers} from '../../atoms/index'


export default ()=>{
  const [User, setUser]= useRecoilState(user)
  const [Users, setUsers]= useRecoilState(allUsers)

  useEffect(async ()=>{
    const Users= await axios.get('/api/users')
    setUsers(Users.data)
  },[])

    return(
      <>
      {User ?
        <Admin 
      />
      :
      <Auth403/>
      }
      </>
    )
}