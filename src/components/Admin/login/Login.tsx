import React, {useContext, useEffect, useState} from 'react';
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

import {AuthContext} from "../../../authentication/authContext";

import './login.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg'


const { Content, Sider } = Layout;

const Login: React.FC = () => {

    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), [formData, setFormData] = useState({
        username: '',
        password: ''
    }), handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }, handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const adminCredentials = {...formData};
        try {
            const res = await fetch('http://localhost:5000/Login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminCredentials)
            })
            if (res.status === 200) {
                auth.login();
                navigate('/Admin/Control-panel');
            } else {
                alert('POGREŠNO KORISNIČKO IME ILI LOZINKA');
            }
        } catch (err) {
            console.log('invalid credentials')
        }
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
                <Menu theme="dark" defaultSelectedKeys={['8']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}><b>LOGIN</b></Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"login-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={" card login-page-form"}>
                            <form onSubmit={handleSubmit} className={"text-center login-form"}>
                                <div className="mb-3 login-form1">
                                    <label htmlFor="exampleInputEmail1" className="form-label">USERNAME</label>
                                    <input type="text" name={"username"} value={formData.username} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Molimo unesite vaše korisničko ime.</div>
                                </div>
                                <div className="mb-3 login-form1">
                                    <label htmlFor="exampleInputEmail1" className="form-label">PASSWORD</label>
                                    <input type="password" name={"password"} value={formData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                    <div id="emailHelp" className="form-text">Molimo unesite vašu lozinku.</div>
                                </div>
                                <button type="submit" className="btn btn-primary login-button">LOGIN</button>
                            </form>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Login;