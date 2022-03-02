import React from 'react'
import 'antd/dist/antd.css'
import { Menu} from 'antd'
import { Typography, } from 'antd';

const {  Text } = Typography;
export default function Navigation () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item >
        
          <Text type='home' /> Home
        
      </Menu.Item>
      <Menu.Item>
        
          <Text type='heart-o' /> Popular
        
      </Menu.Item>
      <Menu.Item>
      
          <Text type='like-o' /> Up Coming
        
      </Menu.Item>
      <Menu.Item>
        
          <Text type='rocket' /> Now Playing
        
      </Menu.Item>
      <Menu.Item>
        
          <Text type='star-o' /> Top Rated
        
      </Menu.Item>
    </Menu>
  )
}