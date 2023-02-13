import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './deleteActivity.css'
import 'bootstrap/dist/css/bootstrap.css';

import {AuthContext} from "../../../../authentication/authContext";

import image1 from '../../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

const DeleteActivity: React.FC = () => {

    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }, {activityId} = useParams(), handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Activities/Delete/${activityId}`);
        alert('AKTIVNOST USPJEŠNO IZBRISANA!')
        navigate('/Admin/Control-panel/Activities/Select');
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
        <Layout style={{ minHeight: 'max-content'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}>ADMIN PANEL</Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}>NOVA AKTIVNOST</Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}><b>UREDI AKTIVNOSTI</b></Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}>NOVA OBAVIJEST</Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}>UREDI OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}>NOVI ČLANOVI</Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"deleteActivity-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <div className={"card delete-form"}>
                            <form onSubmit={handleSubmit} className={"text-center deleteActivity-form"}>
                                <h4 className={"delete-header"}>Da li ste sigurni da želite obrisati ovu aktivnost?</h4>
                                <button type="submit" className="btn btn-primary">OBRIŠI</button>
                            </form>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DeleteActivity;