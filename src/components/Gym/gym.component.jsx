import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
function Gym(props){
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              Time-based Exercise
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              Rep-based Exercise
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Weight-based Exercise
            </a>
          </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className='m-3'>
                <Dropdown overlay={menu} trigger='click'>
                    <Button type="primary" shape="circle" size='large'>
                        +      
                    </Button>
                </Dropdown>
            </div>

        </div>
    )    
}

export default Gym;