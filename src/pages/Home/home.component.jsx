import React, { useState } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import './home.styles.scss';

import PanelSwitcher from '../../components/PanelSwitcher/panelswitcher.component.jsx';

const { Header, Content, Sider} = Layout;
function Home(){
    const [page, setPage] = useState("Notes");

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
                <Menu className='menu' theme="light" mode="vertical" selectedKeys={page} onClick={data => setPage(data.key)}>
                    <Menu.Item key="Notes">Notes</Menu.Item>
                    <Menu.Item key="To-do">To-do List</Menu.Item>
                    <Menu.Item key="Daily">Daily tasks</Menu.Item>
                    <Menu.Item key="Deadlines">Deadlines</Menu.Item>
                    <Menu.Item key="Reminders">Reminders</Menu.Item>
                    <Menu.Item key="Aspirations">Aspirations</Menu.Item>
                </Menu>                  
            </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>
              <PageHeader style={{marginTop: '25px'}}ghost={false} title={page} />
              <Content style={{marginTop: '25px',padding: '24px'}} className='content'>
                    <PanelSwitcher page={page}/>
              </Content>
          </Layout>
      </Layout>
    </Layout>
 )
}

export default Home;