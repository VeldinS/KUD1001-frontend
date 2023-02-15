import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './editActivity.css'
import 'bootstrap/dist/css/bootstrap.css';

import {AuthContext} from "../../../../authentication/authContext";

import image1 from '../../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

interface Activity {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    text: string;
}

const EditActivity: React.FC = () => {
    const auth = useContext(AuthContext), [activityData, setActivityData] = useState({
        _id: '',
        name: '',
        location: '',
        country: '',
        date: '',
        text: '',
    }), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }, handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        await setActivityData({...activityData, [name]: value});
    }, handleChangeTextArea = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        await setActivityData({...activityData, [name]: value});
    }, {activityId} = useParams(), handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newActivity = {
            name: activityData.name,
            location: activityData.location,
            country: activityData.country,
            date: activityData.date,
            text: activityData.text,
        }
        const response = await axios.patch(process.env.REACT_APP_BACKEND_URL + `/Admin/Control-panel/Activities/Edit/${activityId}`, newActivity, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        alert('AKTIVNOST USPJEŠNO AŽURIRANA!')
        navigate('/Admin/Control-panel/Activities/Select');
    };

    useEffect(() => {
        fetch( process.env.REACT_APP_BACKEND_URL + `/Activities/${activityId}`)
            .then((res) => res.json())
            .then((data) => setActivityData(data as Activity))
    }, [activityId]);

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
                    <div className={"editActivity-page-main"} style={{minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div>
                            {activityData && (
                                <div  key={activityData._id}>
                                    <form onSubmit={handleSubmit} className={"text-center editActivity-form"}>
                                        <div className="mb-3 editActivity-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">NAZIV AKTIVNOSTI</label>
                                            <input defaultValue={activityData.name} name={'name'} onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 editActivity-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">LOKACIJA</label>
                                            <input defaultValue={activityData.location} name={'location'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="mb-3 editActivity-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">DRŽAVA</label>
                                            <input defaultValue={activityData.country} name={'country'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="mb-3 editActivity-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">DATUM</label>
                                            <input defaultValue={activityData.date} name={'date'} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div className="mb-3 editActivity-form1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                                            <textarea defaultValue={activityData.text} name={'text'} onChange={handleChangeTextArea} className="form-control editActivity-form2" id="exampleInputPassword1"/>
                                        </div>
                                        <div className={"editActivity-form3"}>
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

export default EditActivity;