import React from 'react'
import { Row,Button } from 'antd';
import { useRecoilState } from "recoil";
import {user} from '../../atoms/index'



export default ({handlogout})=>{
const [User, setUser]= useRecoilState(user)

    return(
        <Row>
            {User && 
            <Button onClick={handlogout}>
                Logout
            </Button>}
        </Row>
    )
}