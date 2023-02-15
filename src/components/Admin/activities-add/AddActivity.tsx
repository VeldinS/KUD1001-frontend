import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import {DesktopOutlined, LogoutOutlined, FormOutlined, UsergroupAddOutlined, DiffOutlined} from '@ant-design/icons';
import {Layout, Menu, theme, DatePicker } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './addActivity.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

const AddActivity: React.FC = () => {
    const [formData, setFormData] = useState({
            name: '',
            location: '',
            country: '',
            date: '',
            text: '',
            image1: '',
            image2: ''
        }), [image1Path, setImage1Path] = useState(''), [image2Path, setImage2Path] = useState(''),
        auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
            token: {},
        } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
            auth.logout();
            navigate('/Login');
        }, handleImageChange = (e: any) => {
            setImage1Path(e.target.files[0].name);
            setImage2Path(e.target.files[1].name);
            console.log(e.target.files)
        }, handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target;
            setFormData({...formData, [name]: value});
        }, handleDateChange = (date: any, dateString: string) => {
            setFormData({ ...formData, date: dateString });
        }, handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newActivity = {
                name: formData.name,
                location: formData.location,
                country: formData.country,
                date: formData.date,
                text: formData.text,
                image1: image1Path,
                image2: image2Path
            }
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/Admin/Control-panel/Activities/Add', newActivity, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            alert('AKTIVNOST USPJEŠNO OBJAVLJENA')
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
        <Layout style={{ minHeight: 'max-content'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu  theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}>ADMIN PANEL</Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}><b>NOVA AKTIVNOST</b></Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}>UREDI AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}>NOVA OBAVIJEST</Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}>UREDI OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}>NOVI ČLANOVI</Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"addActivity-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={"row"}>
                            <div className={"col-8 form-pt-1"}>
                                <form onSubmit={handleSubmit} className={"text-center addActivity-form"}>
                                    <div className="mb-3 addActivity-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">NAZIV AKTIVNOSTI</label>
                                        <input type="text" name={'name'} value={formData.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 addActivity-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">GRAD</label>
                                        <input type="text" name={'location'} value={formData.location} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 addActivity-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">DRŽAVA</label>
                                        <input type="text" name={'country'} value={formData.country} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 addActivity-form1">
                                        <label htmlFor="exampleInputEmail1" className="form-label">DETALJAN TEKST</label>
                                        <input type="text" name={'text'} value={formData.text} onChange={handleChange} className="form-control addActivity-form2" id="exampleInputPassword1"/>
                                    </div>
                                </form>
                            </div>
                            <div className={"col-4 form-pt-2"}>
                                <form onSubmit={handleSubmit} >
                                    <div className="mb-3 addActivity-form1 addActivity-form3">
                                        <label htmlFor="date-input" className="form-label">DATUM</label>
                                        <br/>
                                        <DatePicker  name={'date'} onChange={handleDateChange} />
                                    </div>
                                    <div className={"addActivity-form3"}>
                                        <p>ODABERITE 2 FOTOGRAFIJE ZA VAŠU NOVU AKTIVNOST!</p>
                                        <input name={'image'} type={"file"} accept={".jpeg, .png, .jpg"} multiple onChange={handleImageChange}/>
                                    </div>
                                    <div className={"addActivity-form3"}>
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

export default AddActivity;