import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useRecoilState } from "recoil";
import Navar from '../components/Navar'
import {user} from '../../atoms/index'


export default ()=>{
  const history = useHistory();
  const [User, setUser]= useRecoilState(user)


  const handlogout = async ()=>{
    const respuesta= await axios.post(`/api/logout`,User)
    console.log("logout successfull",respuesta)
    history.push("/login")
  }
      
    return(
      <Navar 
      handlogout={handlogout}
      />
    )
}