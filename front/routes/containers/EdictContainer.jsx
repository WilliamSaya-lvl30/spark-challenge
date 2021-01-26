import React,{ useState } from 'react';
import axios from 'axios'
import { useRecoilState } from "recoil";
import Edict from '../components/Edict'
import {allUsers} from '../../atoms/index'
import { Form } from "antd";



export default ({userID})=>{
  const [Users, setUsers]= useRecoilState(allUsers)
  const [openModal,setOpenModal]=useState(false)
  const [loading,setLoading]=useState(false)
  const [userForUpdate, setUserForUpdate]=useState({})
  const [update,setUpdate]=useState({
    nombre:'',
    email:'',
    dni:'',
    domicilio:''
  })
  const [form] = Form.useForm();


  const handleCancel = ()=>{
    setOpenModal(false)
    setUpdate({
      nombre:'',
      email:'',
      dni:'',
      domicilio:''
    })
    setUserForUpdate({})
    form.resetFields();
  }

  const handleOk = async ()=>{
    setLoading(true) 
    setOpenModal(false)

    //toma los valores que el usuario quiere actualizar
    const userPut= {}
    for (const key in update){
      update[key] ? userPut[key]=update[key] : ''
    }
    //actualiza y recibe de nuevo al usuario modificado
    const user= await axios.put(`/api/users/${userForUpdate._id}`,userPut)
    user.data.fechaDeAlta =  user.data.fechaDeAlta.split("T")[0]

    //igresa al usuario actualizado en los Users y los setea en el estado
    const usersUpdate=[...Users]
    usersUpdate.map((usuario,i)=>{
      if(usuario._id == user.data._id){
        usersUpdate[i]=user.data
      }
    })
    setUsers(usersUpdate)
    setLoading(false) 
    setUpdate({
      nombre:'',
      email:'',
      dni:'',
      domicilio:''
    })
    setUserForUpdate({})
    form.resetFields();
  }

  const handleChange = (e)=>{
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
    
  }

  const handleOpen = ()=>{
    //setea el usuario que se quiere actualizar y abre el modal
    const Usuario=Users.filter(usuario=> usuario._id === userID)[0]
    setUserForUpdate(Usuario)
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
        update={update}
        setUpdate={setUpdate}
        handleChange={handleChange}
        userForUpdate={userForUpdate}
        form={form}
        />
    )
}