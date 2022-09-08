import { Breadcrumb, Layout} from 'antd';
import React, { useState } from 'react';
import SideBar from './Sidebar';
import AdminFooter from "./AdminFooter";
import { useNavigate, Redirect} from "react-router-dom";
const { Header, Content} = Layout;

const Dashboard = () => {
    let navigate = useNavigate();
    return (

        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBar/>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <AdminFooter/>
            </Layout>
        </Layout>
    );
};

export default Dashboard;