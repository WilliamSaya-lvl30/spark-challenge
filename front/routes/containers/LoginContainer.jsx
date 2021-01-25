import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useRecoilState } from "recoil";
import { Row, Col } from 'antd';
import Login from '../components/Login'
import {user} from '../../atoms/index'

export default ()=>{
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")
  const [loading ,setLoading]=useState(false)
  const history = useHistory();
  const [User, setUser]= useRecoilState(user)



  const handlendSubmid = async ()=>{
    console.log("submitio")
    const auth ={
      email,
      password
    }
    setLoading(true)
    setEmail("")
    setPassword("")
    const user= await axios.post(`/api/login`,auth)
    if(user){
      setUser(user.data)
      setLoading(false)
      history.push('/admin')
    }
  }
      
    return(
      <Login 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}   
      handlendSubmid={handlendSubmid}
      loading={loading}
      />
    )
}