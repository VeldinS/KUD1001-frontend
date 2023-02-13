import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../../store/allActivities/activityActions";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, UsergroupAddOutlined, FormOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../authentication/authContext";

import './activities.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../control-panel/images/image1.jpg'
import {Activity} from "../../../store/allActivities/activityTypes";


const { Content, Sider } = Layout;

const Activities: React.FC = () => {
    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }

    const dispatch = useDispatch();
    const activityData = useSelector((state: any) => state.loadData);

    useEffect(() => {
        dispatch(fetchActivities());
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
                    <div className={"adminActivities-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <div className={"row adminActivities-row1"}>
                            {activityData.map((activity:Activity) => (
                                <div  className={"col-4 adminActivity"} key={activity._id}>
                                    <div>
                                        <div className="card adminCard1">
                                            <img src={image1} className="card-img-top" alt="..."/>
                                            {/*switch src={dummy} with src={activity.image1}*/}
                                            <div className="card-body">
                                                <h5  className="card-title">{activity.name}</h5>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li  className="list-group-item adminCard2">{activity.location}</li>
                                                <li  className="list-group-item adminCard2">{activity.country}</li>
                                                <li  className="list-group-item adminCard2">{activity.date}</li>
                                            </ul>
                                            <div className="card-body text-center">
                                                <Link to={`/Admin/Control-panel/Activities/${activity._id}`}>
                                                    <button type="button" className="btn btn-open btn-outline-secondary">Otvori aktivnost</button>
                                                </Link>
                                                <br/>
                                                <Link to={`/Admin/Control-panel/Activities/Edit/${activity._id}`}>
                                                    <button  type="button" className="btn btn-edit btn-outline-secondary">Uredi aktivnost</button>
                                                </Link>
                                                <br/>
                                                <Link to={`/Admin/Control-panel/Activities/Delete/${activity._id}`}>
                                                    <button type="button" className="btn btn-delete btn-outline-secondary">Obriši aktivnost</button>
                                                </Link>
                                            </div>
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

export default Activities;