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
    //al montar el componente pide todos los usuarios de la base de datos
    const Users= await axios.get('/api/users')
    //formatea la fecha en un formato mas visible y setea los usuarios al estado global
    Users.data.map((user)=>{
      user.fechaDeAlta =  user.fechaDeAlta.split("T")[0]
    })
    setUsers(Users.data)
  },[])

  const deleteUser= async (id)=>{
    //al borrar al usuario se filtra del estado y se setea de nuevo a los usuarios
    await axios.delete(`/api/users/${id}`)
    let usersUpdate=[...Users]
    usersUpdate = usersUpdate.filter((usuario)=> usuario._id !== id)
    setUsers(usersUpdate)
  }

    return(
      <>
      {User ?
        <Admin 
        deleteUser={deleteUser}
      />
      :
      <Auth403/>
      }
      </>
    )
}