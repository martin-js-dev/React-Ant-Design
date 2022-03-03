import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Grid} from 'antd'
import { Typography, } from 'antd';

const {  Text } = Typography;
export default function Footer () {
  return (
      <Menu mode='horizontal'>
    <Menu mode='vertical'>
      <Menu.Item >
          <Text type='home' /> Home
      </Menu.Item>
      <Menu.Item>
        <Text type='heart-o' /> Popular 
      </Menu.Item>
      <Menu.Item>
          <Text type='like-o' /> Images
      </Menu.Item>
      <Menu.Item>  
          <Text type='rocket' /> Products
      </Menu.Item>
      <Menu.Item>
          <Text type='star-o' /> FAQ
      </Menu.Item>
    </Menu>

    <Menu mode='vertical'>
      <Menu.Item >
          <Text type='home' /> About
      </Menu.Item>
      <Menu.Item>
        <Text type='heart-o' /> History
      </Menu.Item>
      <Menu.Item>
          <Text type='like-o' /> Brand
      </Menu.Item>
      <Menu.Item>  
          <Text type='rocket' /> Events 
      </Menu.Item>
      
    </Menu>

    <Menu mode='vertical'>
      <Menu.Item >
          <Text type='home' /> Contact
      </Menu.Item>
      <Menu.Item>
        <Text type='heart-o' /> Email 
      </Menu.Item>
      <Menu.Item>
          <Text type='like-o' /> Phone
      </Menu.Item>
      <Menu.Item>  
          <Text type='rocket' />Social Media
      </Menu.Item>
      <Menu.Item>
          <Text type='star-o' /> Location
      </Menu.Item>
    </Menu>
    </Menu>
  )
}