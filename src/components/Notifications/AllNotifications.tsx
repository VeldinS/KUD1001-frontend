import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../store/allNoifications/notificationActions";
import {Notification} from "../../store/allNoifications/notificationTypes";

import {
    DesktopOutlined,
    UsergroupAddOutlined,
    HomeOutlined,
    NotificationOutlined, TeamOutlined, QuestionCircleOutlined, PushpinOutlined, PhoneOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './allNotifications.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg'


const { Content, Sider } = Layout;

const AllNotifications: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false), {
            token: {},
        } = theme.useToken(), navigate = useNavigate(), dispatch = useDispatch(),
        notificationData = useSelector((state: any) => state.loadData);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

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
                <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}><b>OBAVIJESTI</b></Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"allNotifications-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <h1 className={"text-center notifications-page-heading1"}>OBAVIJESTI</h1>
                        {notificationData.map((notification:Notification) => (
                            <div className={"row allNotifications-row1"}>
                                <div key={notification._id}>
                                    <div>
                                        <div className="card allNotificationsCard">
                                            <div className="card-header">
                                                Obavijest
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{notification.name}</h5>
                                                <p className="card-text">{notification.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AllNotifications;