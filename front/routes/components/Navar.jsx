import React from 'react'
import { Row,Button, Col } from 'antd';


export default ({handlogout})=>{
    return(
        <Row>
            <Button onClick={handlogout}>
                Logout
            </Button>
        </Row>
    )
}