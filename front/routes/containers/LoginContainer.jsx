import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useRecoilState } from "recoil";
import Login from '../components/Login'
import {user} from '../../atoms/index'

export default ()=>{
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")
  const [loading ,setLoading]=useState(false)
  const history = useHistory();
  const [User, setUser]= useRecoilState(user)



  const handlendSubmid = async ()=>{
    const auth ={
      email,
      password
    }
    setLoading(true)
    setEmail("")
    setPassword("")

    try {
      const user= await axios.post(`/api/login`,auth)
      console.log(user)
      if(user){
        setUser(user.data)
        setLoading(false)
        history.push('/admin')
      }
    } catch(err) {
      console.log(err.message)
      setLoading(false)
      alert('Email o Password incorrectos, por favor intentelo de nuevo.'); // TypeError: failed to fetch
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