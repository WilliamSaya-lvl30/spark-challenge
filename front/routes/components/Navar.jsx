import React from 'react'
import { Row,Col,Button } from 'antd';
import { useRecoilState } from "recoil";
import {user} from '../../atoms/index'



export default ({handlogout})=>{
const [User, setUser]= useRecoilState(user)

    return(
        <Row>
            <Col span={4}></Col>
            <Col span={16} >
                <h1>SPARK CHALLENGE</h1>
            </Col>
            <Col span={4} className='logout'>
                {User && 
                <Button onClick={handlogout} >
                Logout
                </Button>}
            </Col>
            
        </Row>
    )
}