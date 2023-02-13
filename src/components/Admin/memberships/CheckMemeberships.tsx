import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {fetchRegistrations} from "../../../store/allRegistrations/registrationActions";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './checkMemberships.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;


const CheckMemberships: React.FC = () => {
    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }, handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, activityId: string) => {
        event.preventDefault();
        const response = await axios.delete(`http://localhost:5000/Admin/Control-panel/Membership/Delete/${activityId}`);
        const newData = registrationData.filter((member: { _id: string; }) => member._id !== activityId);
        dispatch(fetchRegistrations());
        alert('PRIJAVA USPJEŠNO ODOBRENA!');
    }, dispatch = useDispatch(), registrationData = useSelector((state: any) => state.loadData);

    useEffect(() => {
        dispatch(fetchRegistrations());
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
                <Menu theme="dark" defaultSelectedKeys={['7']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<DesktopOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<DesktopOutlined />} onClick={() => navigate('/Admin/Control-panel')}>ADMIN PANEL</Menu.Item>
                    <Menu.Item key={"3"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Add')}>NOVA AKTIVNOST</Menu.Item>
                    <Menu.Item key={"4"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Activities/Select')}>UREDI AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<DiffOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Add')}>NOVA OBAVIJEST</Menu.Item>
                    <Menu.Item key={"6"} icon={<FormOutlined />} onClick={() => navigate('/Admin/Control-panel/Notifications/Select')}>UREDI OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"7"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Admin/Control-panel/Memberships')}><b>NOVI ČLANOVI</b></Menu.Item>
                    <Menu.Item key={"8"} icon={<LogoutOutlined />} onClick={navigateToLogin}>LOGOUT</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"checkMemberships-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={"row checkMemberships-row1"}>
                            {registrationData.map((member:any) => (
                                <div  className={"col-4 membership"} key={member._id}>
                                    <div className="card checkMemberships-card1">
                                        <div className="card-body">
                                            <h5 className="card-title">{member.name}  {member.surname}</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item checkMemberships-card2">Uzrast: {member.date}</li>
                                            <li className="list-group-item checkMemberships-card2">{member.email}</li>
                                            <li className="list-group-item checkMemberships-card2">{member.number}</li>
                                        </ul>
                                        <div className="card-body text-center">
                                            <button onClick={(event) => handleSubmit(event, member._id)} type="button" className="btn btn-outline-secondary">Odobri zahtjev</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default CheckMemberships;