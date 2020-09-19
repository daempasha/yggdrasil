import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './home.styles.scss';

import PanelSwitcher from '../../components/PanelSwitcher/panelswitcher.component.jsx';

const { Header, Content, Sider} = Layout;
function Home(){
    const [page, setPage] = useState("notes");

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
                <Menu className='menu' theme="light" mode="vertical" defaultValue={page} onClick={data => setPage(data.key)}>
                    <Menu.Item key="notes">Notes</Menu.Item>
                    <Menu.Item key="todo">To-do List</Menu.Item>
                    <Menu.Item key="daily">Daily tasks</Menu.Item>
                    <Menu.Item key="deadlines">Deadlines</Menu.Item>
                    <Menu.Item key="reminders">Reminders</Menu.Item>
                    <Menu.Item key="aspiration">Aspirations</Menu.Item>
                </Menu>                  
            </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{marginTop: '25px',padding: '24px'}} className='content'>
                    <PanelSwitcher page={page}/>
              </Content>
          </Layout>
      </Layout>
    </Layout>
 )
}

export default Home;