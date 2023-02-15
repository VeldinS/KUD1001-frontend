import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {DesktopOutlined, LogoutOutlined, DiffOutlined, FormOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import {AuthContext} from "../../../../authentication/authContext";

import './openActivity.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../../control-panel/images/image1.jpg'


const { Content, Sider } = Layout;

interface Activity {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    text: string;
    image1: string;
    image2: string;
}
const OpenActivity: React.FC = () => {
    const auth = useContext(AuthContext), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), navigateToLogin = () => {
        auth.logout();
        navigate('/Login');
    }, {activityId} = useParams(), [activityData, setActivityData] = useState<Activity>();


    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + `/Activities/${activityId}`)
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
                    <div className={"openActivity-page-main"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(${image1})`, backgroundSize: "cover",height: 'max-content'}}>
                        <div>
                            {activityData && (
                                <div key={activityData._id}>
                                    <h1 className={"text-center openActivity-page-heading1"}>{activityData.name}</h1>
                                    <div className={"row openActivity-row1"}>
                                        <div className={"col-6 openActivity-box1"}>
                                            <h4>{activityData.country}</h4>
                                            <h4>{activityData.location} </h4>
                                            <h4>{activityData.date}</h4>
                                        </div>
                                        <div className={"col-1"}></div>
                                        <div className={"col-5 openActivity-box2"}>
                                            <div>
                                                <img className={"img-fluid"} src={image1} alt={''}/>
                                                {/*switch src={dummy} with src={activityData.image1}*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row openActivity-row2"}>
                                        <div className={"col-5 openActivity-box3"}>
                                            <div>
                                                <img className={"img-fluid"} src={image1} alt={''}/>
                                                {/*switch src={dummy} with src={activityData.image2}*/}
                                            </div>
                                        </div>
                                        <div className={"col-7 openActivity-box4"}>
                                            <p> {activityData.text} </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default OpenActivity;