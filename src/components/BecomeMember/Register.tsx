import React, {useEffect, useState} from 'react';
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

import './register.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from './images/image1.jpg';


const { Content, Sider } = Layout;

const Register: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false), {
        token: {},
    } = theme.useToken(), navigate = useNavigate(), [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        date: ''
    }), handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    },handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }, handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPerson = {...formData};
        await fetch('http://localhost:5000/Register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson)
        })
        navigate('/Redirect');
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
            <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu.Item key={"1"} icon={<HomeOutlined />} onClick={() => navigate('/')}>POČETNA</Menu.Item>
                    <Menu.Item key={"2"} icon={<QuestionCircleOutlined />} onClick={() => navigate('/About')}>O NAMA</Menu.Item>
                    <Menu.Item key={"3"} icon={<DesktopOutlined /> } onClick={() => navigate('/Activities')}>AKTIVNOSTI</Menu.Item>
                    <Menu.Item key={"4"} icon={<NotificationOutlined />} onClick={() => navigate('/Notifications')}>OBAVIJESTI</Menu.Item>
                    <Menu.Item key={"5"} icon={<UsergroupAddOutlined />} onClick={() => navigate('/Register')}><b>POSTANI ČLAN</b></Menu.Item>
                    <Menu.Item key={"6"} icon={<PushpinOutlined />} onClick={() => navigate('/Location')}>LOKACIJA</Menu.Item>
                    <Menu.Item key={"7"} icon={<PhoneOutlined />} onClick={() => navigate('/Contact')} >KONTAKT</Menu.Item>
                    <Menu.Item key={"8"} icon={<TeamOutlined />} onClick={() => navigate('/Login')}>LOGIN</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 0' }}>
                    <div className={"register-page-main text-center"} style={{ minHeight: '100vh', backgroundImage:  `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${image1})`, backgroundSize: "cover", height: 'max-content'}}>
                        <div className={" register-page-form"}>
                            <form className="row g-3 register-page-form" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Ime</label>
                                    <input type="text" name={"name"} value={formData.name} onChange={handleChange}
                                           className="form-control" id="inputEmail4" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Molimo unesite vaše ime.</div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Prezime</label>
                                    <input type="text" name={"surname"} value={formData.surname} onChange={handleChange}
                                           className="form-control" id="inputEmail4" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Molimo unesite vaše prezime.</div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Email adresa</label>
                                    <input type="email" name={"email"} value={formData.email} onChange={handleChange}
                                           className="form-control" id="inputEmail4" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Molimo unesite vašu email adresu preko
                                        koje cemo vas kontaktirati.
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputAddress2" className="form-label">Broj telefona</label>
                                    <input type="number" name={"number"} value={formData.number} onChange={handleChange}
                                           className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">Molimo unesite vaš broj telefona preko
                                        kojeg cemo vas kontaktirati.
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputState" className="form-label">Uzrast</label>
                                    <select id="inputState" name={"date"} className="form-select"  onChange={handleSelectChange} value={formData.date}>
                                        <option selected>Odaberi...</option>
                                        <option>0-8 godina</option>
                                        <option>9-13 godina</option>
                                        <option>13-18 godina</option>
                                    </select>
                                    <div id="emailHelp" className="form-text">Molimo odaberite vaš uzrast na osnovu kojeg čemo vas dodati u odgovarajuću grupu.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary submit-button">POSTANI ČLAN!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Register;