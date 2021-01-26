import React,{ useState } from 'react';
import { useRecoilState } from "recoil";
import Registro from '../components/Registro'
import {allUsers} from '../../atoms/index'


export default ({userID})=>{
  const [Users, setUsers]= useRecoilState(allUsers)
  const [openModal,setOpenModal]=useState(false)
  const [userSelect, setUserSelect]=useState({})




  const handleCancel = ()=>{
    setOpenModal(false)
  }

  const handleOpen = ()=>{
    //setea al usuario que se quiere ver y abre el modal
    const Usuario=Users.filter(usuario=> usuario._id === userID)[0]
    setUserSelect(Usuario)
    setOpenModal(true)
  }

    return(
      
        <Registro
        openModal={openModal}
        handleCancel={handleCancel}
        handleOpen={handleOpen}
        userSelect={userSelect}
        />
    )
}