import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './editNotification.css'
import 'bootstrap/dist/css/bootstrap.css';

import {AuthContext} from "../../../../authentication/authContext";

import image1 from '../../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

interface Notification {
    _id: string;
    name: string;
    text: string;
}

const EditNotification: React.FC = () => {
    const auth = useContext(AuthContext), [notificationData, setNotificationData] = useState({
        _id: '',
        name: '',
        text: '',
    }), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }, handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        await setNotificationData({...notificationData, [name]: value});
    }, handleChangeTextArea = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        await setNotificationData({...notificationData, [name]: value});
    }, {notificationId} = useParams(), handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newNotification = {
            name: notificationData.name,
            text: notificationData.text,
        }
        const response = await axios.patch(`http://localhost:5000/Admin/Control-panel/Notifications/Edit/${notificationId}`, newNotification, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('OBAVIJEST USPJEŠNO AŽURIRANA!')
        navigate('/Admin/Control-panel');
    };

    useEffect(() => {
        fetch(`http://localhost:5000/Notifications/${notificationId}`)
            .then((res) => res.json())
            .then((data) => setNotificationData(data as Notification))
    }, [notificationId]);

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
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
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
                    <div className={"editNotification-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div>
                            {notificationData && (
                                <div  key={notificationData._id}>
                                    <form onSubmit={handleSubmit} className={"text-center editNotification-form"}>
                                        <div className="mb-3 editNotification-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">NAZIV OBAVIJESTI</label>
                                            <input defaultValue={notificationData.name} name={'name'} onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 editNotification-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                                            <textarea defaultValue={notificationData.text} name={'text'} onChange={handleChangeTextArea} className="form-control editNotification-form2" id="exampleInputPassword1"/>
                                        </div>
                                        <div className={"editNotification-form3"}>
                                            <button  type="submit" className="btn btn-primary form-btn">AŽURIRAJ</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default EditNotification;