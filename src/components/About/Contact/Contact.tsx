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
import {  Layout, Menu, theme } from 'antd';

import './contact.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.png'
import logo1 from './images/phone-logo.png'
import logo2 from './images/outlook-logo.png'
import logo3 from './images/facebook-logo.png'


const { Content, Sider } = Layout;

const Contact: React.FC = () => {

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
            <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu   theme="dark" defaultSelectedKeys={['7']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} ><b>KONTAKT</b></Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"contact-page-main"} style={{ padding: 54, minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={"row info-row1"}>
                            <div className={"col-4 text-center"}>
                                <img className={"img-fluid info-logo"} src={logo1} alt={''}/>
                                <h4>030-XXX-XXX</h4>
                            </div>
                            <div className={"col-4 text-center"}>
                                <img className={"img-fluid info-logo"} src={logo2} alt={''}/>
                                <h4>kud1001noc@outlook.com</h4>
                            </div>
                            <div className={"col-4 text-center"}>
                                <img className={"img-fluid info-logo"} src={logo3} alt={''}/>
                                <h4>@kud1001noćFojnica</h4>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Contact;