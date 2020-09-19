import React, { useState } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import './home.styles.scss';

import PanelSwitcher from '../../components/PanelSwitcher/panelswitcher.component.jsx';

import Notes from '../../components/Notes/notes.component.jsx';

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
                <Menu className='menu' theme="light" mode="vertical" selectedKeys={page} onClick={data => setPage(data.key)}>
                    <Menu.Item key="notes">Notes</Menu.Item>
                    <Menu.Item key="todo">To-do List</Menu.Item>
                    <Menu.Item key="daily">Daily tasks</Menu.Item>
                    <Menu.Item key="deadlines">Deadlines</Menu.Item>
                    <Menu.Item key="reminders">Reminders</Menu.Item>
                    <Menu.Item key="aspirations">Aspirations</Menu.Item>
                </Menu>                  
            </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>
                {
                    page === "notes" ? 
                        <PanelSwitcher title={'Notes'} subtitle={'Just a plain pad to express all your ideas.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
                {
                    page === "todo" ? 
                        <PanelSwitcher title={'To-do List'} subtitle={'Put all your one-off tasks here and cross them off as you finish them.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
                {
                    page === "daily" ? 
                        <PanelSwitcher title={'Daily Tasks'} subtitle={'Any tasks you find yourself repeating daily, eg; taking medicine, flossing or going for a quick jog. Put them here so you don\'t forget.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
                {
                    page === "deadlines" ? 
                        <PanelSwitcher title={'Deadlines'} subtitle={'Any upcoming work deadlines? University assignments? Put them here so you do not forget.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
                {
                    page === "reminders" ? 
                        <PanelSwitcher title={'Reminders'} subtitle={'Anything that\'s not too important to put in deadlines can go here. Need to remember someone\'s birthday? Want to remind yourself of all the subscriptions you subscribed to? Put them here.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
                {
                    page === "aspirations" ? 
                        <PanelSwitcher title={'Aspirations'} subtitle={'Not everything has to be work or education related. Put down some of your favourite hobbies or activities here and track the time you spend doing them. It\'ll help keep you motivated.'}>
                            <Notes />
                        </PanelSwitcher> : null
                }
          </Layout>
      </Layout>
    </Layout>
 )
}

export default Home;