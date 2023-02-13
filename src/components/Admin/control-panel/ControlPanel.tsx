import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './controlPanel.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg'

const { Content, Sider } = Layout;

const Control_panel: React.FC = () => {

    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    };

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
                <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}><b>ADMIN PANEL</b></Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}>NOVA AKTIVNOST</Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}>UREDI AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}>NOVA OBAVIJEST</Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}>UREDI OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}>NOVI ČLANOVI</Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"cp-page-main"} style={{minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <div className={"row row1"}>
                            <div className={"col-3 box text-center rounded-4"} >
                                <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image1})`, backgroundSize: "cover", }}>
                                </div>
                                <div className={"cp-box2 "}>
                                    <h2 className={"cp-header1"}>AKTIVNOSTI</h2>
                                    <button onClick={() => navigate('/Admin/Control-panel/Activities/Add')} type="button" className="btn btn-outline-primary btn1">Postavi novu aktivnost!</button>
                                    <button onClick={() => navigate('/Admin/Control-panel/Activities/Select')} type="button" className="btn btn-outline-primary btn1">Uredi postoječe aktivnosti!</button>
                                </div>
                            </div>
                            <div className={"col-3 box text-center rounded-4"} >
                                <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image1})`, backgroundSize: "cover"}}>
                                </div>
                                <div className={"cp-box2"}>
                                    <h2 className={"cp-header1"}>OBAVIJESTI</h2>
                                    <button onClick={() => navigate('/Admin/Control-panel/Notifications/Add')} type="button" className="btn btn-outline-primary btn1">Postavi novu obavijest!</button>
                                    <button onClick={() => navigate('/Admin/Control-panel/Notifications/Select')} type="button" className="btn btn-outline-primary btn1">Uredi postoječe obavijesti!</button>
                                </div>
                            </div>
                            <div className={"col-3 box text-center rounded-4"} >
                                <div className={"cp-box1 rounded-top-4"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${image1})`, backgroundSize: "cover", }}>
                                </div>
                                <div className={"cp-box2"}>
                                    <h2 className={"cp-header1"}>NOVI ČLANOVI</h2>
                                    <button onClick={() => navigate('/Admin/Control-panel/Memberships')} type="button" className="btn btn-outline-primary btn1">Provjeri nove zahtjeve!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Control_panel;