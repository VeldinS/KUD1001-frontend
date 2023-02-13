import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchNotifications} from "../../../store/allNoifications/notificationActions";
import {Notification} from "../../../store/allNoifications/notificationTypes";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, UsergroupAddOutlined, FormOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './notifications.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../control-panel/images/image1.jpg'
import axios from "axios";


const { Content, Sider } = Layout;

const Notifications: React.FC = () => {
    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
            token: {},
        } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
            auth.logout();
            navigate('/Login');
        }, dispatch = useDispatch(), notificationData = useSelector((state: any) => state.loadData),
        handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, notificationId: string) => {
            event.preventDefault();
            const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Notifications/Delete/${notificationId}`);
            const newData = notificationData.filter((notification: { _id: string; }) => notification._id !== notificationId);
            dispatch(fetchNotifications());
            alert('OBAVIJEST USPJEŠNO OBRISANA!');
        };

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
        <Layout style={{ minHeight: 'max-content'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['6']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}>ADMIN PANEL</Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}>NOVA AKTIVNOST</Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}>UREDI AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}>NOVA OBAVIJEST</Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}><b>UREDI OBAVIJESTI</b></Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}>NOVI ČLANOVI</Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"adminNotifications-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        {notificationData.map((notification:Notification) => (
                        <div className={"row adminNotifications-row1"}>
                                <div key={notification._id}>
                                    <div>
                                        <div className="card notCard">
                                            <div className="card-header">
                                                Obavijest
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{notification.name}</h5>
                                                <p className="card-text">{notification.text}</p>
                                                <div className={"text-center"}>
                                                    <Link to={`/Admin/Control-panel/Notifications/Edit/${notification._id}`}>
                                                        <a href="#" className="allNotifications-button btn btn-primary">Uredi obavijest</a>
                                                    </Link>
                                                    <Link to={`/Admin/Control-panel/Notifications/Delete/${notification._id}`}>
                                                        <button onClick={(event) => handleSubmit(event, notification._id)}  className="allNotifications-button btn btn-primary">Obriši obavijest</button>
                                                    </Link>
                                                </div>
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

export default Notifications;