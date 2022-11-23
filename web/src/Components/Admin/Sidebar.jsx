import {
    DashboardOutlined,
    FileOutlined,
    LayoutOutlined,
    DollarOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
const {Sider } = Layout;
const renderLink = (label, url)=> {
    return (
      <a href={url}>{label}</a>
    );
}
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const items = [
    getItem(renderLink('Dashboard', '/'), '1', <DashboardOutlined />),
    getItem('Catalog', 'sub1', <LayoutOutlined />, [
        getItem(renderLink('Products', '/products'), '2', '', [
            getItem(renderLink('Add new', 'http://localhost:3000/products/add'), '3')
        ]),
        getItem(renderLink('Categories', '/categories'), '3', '', [
            getItem(renderLink('Add new', 'http://localhost:3000/categories/add'), '4')
        ]),
    ]),
    getItem('Sales', 'sub2', <DollarOutlined />, [
        getItem(renderLink('Orders', '/orders'), '5'),
        getItem(renderLink('Shipment', '/shipment'), '6')
    ]),
    getItem('Customers', '7', <UserOutlined />),
];
const SideBar = ()=> {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    );
}
export default SideBar;