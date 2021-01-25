import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


export default ({email,password,setEmail,setPassword,handlendSubmid,loading})=>{
  
  
      const tailLayout = {
          wrapperCol: {
            offset: 8,
            span: 20,
          },
        };
        
      return(
        <div className='form-Container'>
            <h1>LOGIN</h1>
          <Form
          className='formulario-login'
            name="basic"
          //   initialValues={{
          //     remember: true,
          //   }}
            onFinish={handlendSubmid}
          //   onFinishFailed={onFinishFailed}
            >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
            <Input 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)} 
                value={email}/>
        </Form.Item>
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
            <Input.Password 
                placeholder="Password" 
                onChange={(e)=>{
                    setPassword(e.target.value)}} 
                value={password}/>
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox required>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      )
}  