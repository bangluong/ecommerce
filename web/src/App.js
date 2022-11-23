import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Login from "./Components/Customer/Login";
import './Styles/Customer/Login.scss';
import {Routes, Route} from 'react-router-dom';
import Register from "./Components/Customer/Register";
import Dashboard from "./Components/Admin/Dashboard"
import PrivateRoutes from "./Components/Auth/PrivateRoutes";
import 'antd/dist/antd.min.css';
import NotFound from "./Components/NotFound";
import ProductForm from "./Components/Admin/Catalog/Product/Ui_component/Form";
import SideBar from './Components/Admin/Sidebar';
import AdminFooter from "./Components/Admin/AdminFooter";
import {Breadcrumb, Layout} from 'antd';
import CategoryForm from "./Components/Admin/Catalog/Category/Ui_component/Form";

const {Header, Content} = Layout;

const AdminLayout = (element) => {
    return (
        <Layout>
            <SideBar/>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content style={{margin: '0 16px'}}></Content>
                {element}
                <AdminFooter/>
            </Layout>
        </Layout>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path={'/products/add'} element={AdminLayout(<ProductForm/>)}></Route>
                <Route path={'/categories/add'} element={AdminLayout(<CategoryForm/>)}></Route>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;