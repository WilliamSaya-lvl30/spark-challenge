import React,{ useState } from 'react';
import axios from 'axios'
import { useRecoilState } from "recoil";
import Edict from '../components/Edict'
import {user,allUsers} from '../../atoms/index'
import Auth403 from '../components/403'


export default ({userID})=>{
  const [User, setUser]= useRecoilState(user)
  const [Users, setUsers]= useRecoilState(allUsers)
  const [openModal,setOpenModal]=useState(false)
  const [loading,setLoading]=useState(false)

  //   useEffect(async ()=>{
//     const Users= await axios.get('/api/users')
//     setUsers(Users.data)
//   },[])

  const handleCancel = ()=>{
    setOpenModal(false)
  }

  const handleOk = ()=>{
    setLoading(true)
    
  }

  const handleOpen = ()=>{
    const Usuario=Users.filter(usuario=> usuario._id === userID)[0]
    console.log(userID,Usuario)
    setOpenModal(true)

  }

    return(
      
        <Edict
        userID={userID}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
        handleOpen={handleOpen}
        />
    )
}