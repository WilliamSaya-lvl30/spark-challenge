import React from 'react'
import {user} from '../../atoms/index'
import { useRecoilState } from "recoil";
import {Button,Modal,Form,Input,InputNumber} from 'antd'



export default ({openModal,handleCancel,handleOk,loading,handleOpen,update, setUpdate,userForUpdate,handleChange,form})=>{
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    return (
    <>
    <Button className="modal-button2" onClick={handleOpen}>
        Editar
    </Button>

    <Modal
          visible={openModal}
          centered
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Update
              </Button>
          ]}
        >

        <Form {...layout} 
        form={form}
        className='formulario-edicion'
        name="nest-messages" 
        validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Nombre"   
            >
                <Input 
                onChange={handleChange} 
                name='nombre' 
                value={update.nombre} 
                placeholder={userForUpdate.nombre}/>
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                {
                    type: 'email',
                },
                ]}
            >
                <Input 
                 onChange={handleChange} 
                 name='email' 
                 value={update.email}
                 placeholder={userForUpdate.email}
                />
            </Form.Item>
            <Form.Item
                name={['user', 'dni']}
                label="DNI"
              
            >
                <Input
                type='number'
                placeholder={userForUpdate.dni}
                name='dni'
                onChange={handleChange}
                value={update.dni}/>
            </Form.Item>
            <Form.Item 
            name={['user', 'domicilio']} 
            label="Domicilio"
            >
                <Input 
                 onChange={handleChange} 
                 name='domicilio' 
                 value={update.domicilio}
                 placeholder={userForUpdate.domicilio}/>
            </Form.Item>
        </Form>

    </Modal>
    </>
)

}