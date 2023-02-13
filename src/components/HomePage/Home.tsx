import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {
    DesktopOutlined,
    HomeOutlined,
    NotificationOutlined, PhoneOutlined, PushpinOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './home.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg';

const {  Content, Sider } = Layout;

const Home: React.FC = () => {
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
        <Layout style={{ minHeight: 'max-content' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}><b>POČETNA</b></Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
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
                    <div className={"home-page-main"} style={{ padding: 54, minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <h1 className={"text-center home-page-heading1"}>KUD "1001 noć" FOJNICA</h1>
                            <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;