import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


export default ({handledEmail,handledPassword,handlendSubmid,loading,form})=>{
  
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
            form={form}
            className='formulario-login'
            name="basic"
            initialValues={{
              remember: false,
            }}
            onFinish={handlendSubmid}
            >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
            <Input 
                placeholder="Email"
                onChange={handledEmail} 
                />
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
                onChange={handledPassword} 
                />
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