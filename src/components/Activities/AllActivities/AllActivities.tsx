import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../../store/allActivities/activityActions";
import {Activity} from "../../../store/allActivities/activityTypes";

import {
    DesktopOutlined,
    HomeOutlined,
    NotificationOutlined, PhoneOutlined, PushpinOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './allActivities.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg';



const { Content, Sider } = Layout;

const AllActivities: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false), {
            token: {},
        } = theme.useToken(), navigate = useNavigate(), dispatch = useDispatch(),
        activityData = useSelector((state: any) => state.loadData);

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
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}><b>AKTIVNOSTI</b></Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}>POSTANI ČLAN</Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout  className="site-layout">
                <Content style={{ margin: '0 0', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover",minHeight: '100vh', height: 'max-content'}}>
                    <div className={"activities-page-main"} style={{ padding: 34, minHeight: '100vh', height: 'max-content'}}>
                        <h1 className={"text-center activities-page-heading1"}>AKTIVNOSTI</h1>
                        <div className={"row activities-row1"}>
                            {activityData.map((activity:Activity) => (
                                <div  className={"col-4 activity"} key={activity._id}>
                                    <div>
                                        <div className="card card1">
                                            <img src={image1} className="card-img-top" alt="..."/>
                                            {/*switch src={dummy} with src={activity.image1}*/}
                                            <div className="card-body">
                                                <h5  className="card-title">{activity.name}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li  className="list-group-item card2">{activity.location}</li>
                                                <li  className="list-group-item card2">{activity.country}</li>
                                                <li  className="list-group-item card2">{activity.date}</li>
                                            </ul>
                                            <div className="card-body text-center">
                                                <Link to={`/Activities/${activity._id}`}>
                                                    <button  type="button" className="btn btn-outline-secondary allActivities-button">Otvori aktivnost</button>
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

export default AllActivities;