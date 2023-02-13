import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import {
    DesktopOutlined,
    HomeOutlined,
    NotificationOutlined, PhoneOutlined, PushpinOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './location.css'
import 'bootstrap/dist/css/bootstrap.css';


const { Content, Sider } = Layout;

const Location: React.FC = () => {

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
        <Layout style={{ minHeight: '100vh' }}>
            <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu   theme="dark" defaultSelectedKeys={['6']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}><b>LOKACIJA</b></Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"locationBox"}>
                        <address>
                            <iframe className={"locationBox"}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.7414311216385!2d17.89186061546983!3d43.96471447911174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f3df7a29e2cb7%3A0x3ca75907b9b1aa5c!2zMTAwMSBub8SH!5e0!3m2!1sen!2sba!4v1675680590785!5m2!1sen!2sba"
                                width="600" height="450" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </address>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Location;