import React,{useEffect} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import { Layout } from 'antd';
import { useRecoilState } from "recoil";
import LoginContainer from './containers/LoginContainer'
import AdminContainer from './containers/AdminContainer'
import NavbarContainer from './containers/NavbarContainer'
import {user} from '../atoms/index'


const { Header, Footer, Content } = Layout;

export default function () {
  
  const [User, setUser]= useRecoilState(user)

  useEffect(async ()=>{
    const User= await axios.get('/api/me')
    setUser(User)
  },[])

  return (
    <div>
      <Layout>
        <Header id='header'>
          <NavbarContainer/>
        </Header>
        <Content id='content'>

          <Switch>
            <Route path="/admin" component={AdminContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Redirect from="/" to="/login" />
          </Switch>
        </Content>
        <Footer id='footer'>Footer</Footer>
      </Layout>
    
    </div>  
  );
}