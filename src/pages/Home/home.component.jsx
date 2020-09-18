import React from 'react';
import { Layout, Menu } from 'antd';
import './home.styles.scss';
const { Header, Content, Sider} = Layout;
function Home(){
 return (
    <Layout className='home'>
        <Header>
            <Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>        
      </Header>
      <Layout className='main'>
          <Sider className='sidebar'>
            Test
          </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>
              Tesst
              <Content style={{padding: '24px'}} className='content'>
                  
              </Content>
          </Layout>
      </Layout>
    </Layout>
 )
}

export default Home;