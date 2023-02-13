import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {DesktopOutlined, LogoutOutlined, FormOutlined, UsergroupAddOutlined, DiffOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './addNotification.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

const AddNotification: React.FC = () => {
    const [formData, setFormData] = useState({
            name: '',
            text: ''
        }),
        auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
            token: {},
        } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
            auth.logout();
            navigate('/Login');
        }, handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target;
            setFormData({...formData, [name]: value});
        }, handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newNotification = {
                name: formData.name,
                text: formData.text
            }
            const response = await axios.post('http://localhost:5000/Admin/Control-panel/Notifications/Add', newNotification, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            alert('OBAVIJEST USPJEŠNO OBJAVLJENA')
            navigate('/Admin/Control-panel');
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
                <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}>ADMIN PANEL</Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}>NOVA AKTIVNOST</Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}>UREDI AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}><b>NOVA OBAVIJEST</b></Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}>UREDI OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}>NOVI ČLANOVI</Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"addNotification-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={"row"}>
                            <div>
                                <form onSubmit={handleSubmit} className={"text-center addNotification-form"}>
                                    <div className="mb-3 addNotification-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">NAZIV OBAVIJESTI</label>
                                        <input type="text" name={'name'} value={formData.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 addNotification-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                                        <input type="text" name={'text'} value={formData.text} onChange={handleChange} className="form-control addActivity-form2" id="exampleInputPassword1"/>
                                    </div>
                                    <div className={"addNotification-form3"}>
                                        <button  type="submit" className="btn btn-primary form-btn">OBJAVI</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AddNotification;