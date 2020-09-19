import React, { useState } from 'react';
import './panelswitcher.styles.scss';
import { Layout, PageHeader } from 'antd';
const {Content} = Layout;

function PanelSwitcher(props){


    return (
        <>
            <PageHeader style={{marginTop: '25px'}}ghost={false} title={props.title} subTitle={props.subtitle} />

            <Content style={{marginTop: '25px'}} className='content'>
                {props.children}
            </Content>
            
        </>
    )
    
}

export default PanelSwitcher;