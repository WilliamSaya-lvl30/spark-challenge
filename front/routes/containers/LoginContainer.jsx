import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useRecoilState } from "recoil";
import Login from '../components/Login'
import {user} from '../../atoms/index'
import { Form } from "antd";


export default ()=>{
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")
  const [loading ,setLoading]=useState(false)
  const history = useHistory();
  const [User, setUser]= useRecoilState(user)
  const [form] = Form.useForm();


  //eventos para tener formularios controlados
  const handledPassword=e=>{
    setPassword(e.target.value)
    form.setFieldsValue({
      password: e.target.value,
    });
  }

  const handledEmail= e =>{
    setEmail(e.target.value)
    form.setFieldsValue({
      email: e.target.value,
    });
  }

  const handlendSubmid = async ()=>{
    const auth ={
      email,
      password
    }
    setLoading(true)
    
    try {
      const user= await axios.post(`/api/login`,auth)
      console.log(user)
      if(user){
        setUser(user.data)
        setLoading(false)
        history.push('/admin')
      }
      form.resetFields();
    } catch(err) {
      console.log(err.message)
      setLoading(false)
      form.resetFields();
      alert('Email o Password incorrectos, por favor intentelo de nuevo.'); // TypeError: failed to fetch
    }

  }
      
    return(
      <Login 
      email={email}
      handledEmail={handledEmail}
      password={password}
      handledPassword={handledPassword}   
      handlendSubmid={handlendSubmid}
      loading={loading}
      form={form}
      />
    )
}