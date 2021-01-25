import React from 'react'
import {user} from '../../atoms/index'
import { useRecoilState } from "recoil";
import {Button,Modal,Form,Input,InputNumber} from 'antd'



export default ({userID,openModal,handleCancel,handleOk,loading,handleOpen})=>{
    const [User, setUser]= useRecoilState(user)

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
              Submit
            </Button>,
          ]}
        >

        <Form {...layout} name="nest-messages" 
        // onFinish={} 
        validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
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
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                {
                    type: 'number',
                },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>

    </Modal>
    </>
)

}