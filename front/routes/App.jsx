import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import LoginContainer from './containers/LoginContainer'

const { Header, Footer, Sider, Content } = Layout;

export default function ({history}) {
  return (
    <div>
      <Layout>
        <Header id='header'>Header</Header>
        <Content id='content'>
          <LoginContainer/>
        </Content>
        <Footer id='footer'>Footer</Footer>
      </Layout>

      {/* <Row>
        <Col   md={24} lg={8} xl={24} style={{backgroundColor:'red'}}>
          Col
        </Col>
        <Col   md={12} lg={8} xl={24} style={{backgroundColor:'blue'}}>
          Col
        </Col>
        <Col   md={12} lg={8} xl={24} style={{backgroundColor:'green'}}>
          Col
        </Col>
      </Row>, */}

        {/* <Switch>
        <Route path="/" component={Home}/>
        <Redirect from="/" to="/" />
        </Switch> */}
    
    </div>  
  );
}