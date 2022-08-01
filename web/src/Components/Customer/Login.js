import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const onFinish = async  (values) => {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/auth/login',
            values,
            { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container" id="container">
            <div className="login-register">
                <div className="form">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>

                        </Form.Item>
                        <div className="login-form-forgot" style={{cursor:"pointer",color:"blue"}} onClick={
                            ()=>{
                                navigate("/forgot")
                            }
                        }>
                            Forgot password
                        </div>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            Or
                            <div className="login-form-register" style={{cursor:"pointer",color:"blue"}} onClick={
                                ()=>{
                                    navigate("/register")
                                }
                            }>
                                Register now!
                            </div>

                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;