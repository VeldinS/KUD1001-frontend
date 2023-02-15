import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {
    DesktopOutlined,
    HomeOutlined,
    NotificationOutlined, PhoneOutlined, PushpinOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';

import './activity.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg';

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

const Activity: React.FC = () => {

    const {activityId} = useParams(), [activityData, setActivityData] = useState<Activity>(), [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate()

    useEffect(() => {
        fetch(  process.env.REACT_APP_BACKEND_URL + `/Activities/${activityId}`)
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
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"activity-page-main"} style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover", minHeight: '100vh', height: 'max-content'}}>
                        <div>
                            {activityData && (
                                <div  key={activityData._id}>
                                    <h1 className={"text-center activity-page-heading1"}>{activityData.name}</h1>
                                    <div className={"row activity-row1"}>
                                        <div className={"col-6 activity-box1"}>
                                            <h4>{activityData.country}</h4>
                                            <h4>{activityData.location} </h4>
                                            <h4>{activityData.date}</h4>
                                        </div>
                                        <div className={"col-1"}></div>
                                        <div className={"col-5 activity-box2"}>
                                            <div>
                                                <img className={"img-fluid"} src={image1} alt={''}/>
                                                {/*switch src={dummy} with src={activityData.image1}*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row activity-row2"}>
                                        <div className={"col-5 activity-box3"}>
                                            <div>
                                                <img className={"img-fluid"} src={image1} alt={''}/>
                                                {/*switch src={dummy} with src={activityData.image2}*/}
                                            </div>
                                        </div>

                                        <div className={"col-7 activity-box4"}>
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

export default Activity;