import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { DesktopOutlined, HomeOutlined, QuestionCircleOutlined, NotificationOutlined, PhoneOutlined, PushpinOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './aboutUs.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image3.png';


const { Content,  Sider } = Layout;
const About: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate()

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 576) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        };
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className={'responsive-container'} >
        <Layout className={"layout-element"} style={{ minHeight: 'max-content'}}>
            <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu   theme="dark" defaultSelectedKeys={['2']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}><b>O NAMA</b></Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"about-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <h1 className={"text-center about-page-heading1"}>ABOUT</h1>
                        <br/>
                        <p className={"aboutUs-p"} >erat dolor in nulla.pretium eget mi.pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                            porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi. magna et consectetur ullamcorper, orci lorem
                            porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi.</p>
                        <p className={"aboutUs-p"}>tor magna, sed consectetur erat dolor in nulla.pretium eget mi. magna et consectetur ullamcorper, orci lorem
                            porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi.</p>
                        <p className={"aboutUs-p"}>pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                            na, r magna, sed consectetur erat dolor in nulla.pretium eget mi. magna et consectetur ullamcorper, orci lorem
                            porttitor magna, sed consectetur erat dolor in nulla.pretium eget mi.ur erat dolor in nulla.pretium eget mi.onsectetur erat dolor in nulla.pretium eget mi.</p>
                        <p className={"aboutUs-p"}>itor magna, sed consectetur erat dolor in nulla.pretium eget mi.pretium eget mi. Donec accumsan, magna et consectetur ullamcorper, orci lorem
                            erat dolor in nulla.pretium eget mi.</p>
                    </div>
                </Content>
            </Layout>
        </Layout>
        </div>
    );
};

export default About;