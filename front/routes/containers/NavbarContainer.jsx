import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useRecoilState } from "recoil";
import { Row, Col } from 'antd';
import Navar from '../components/Navar'
import {user} from '../../atoms/index'


export default ()=>{
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")
  const [loading ,setLoading]=useState(false)
  const history = useHistory();
  const [User, setUser]= useRecoilState(user)


  const handlogout = async ()=>{
    console.log("se esta deslogueando",User)

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