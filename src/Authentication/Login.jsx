import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../pages/SCSS/login/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-6 m-auto">
            <div className="card">
              <div className="text-center">
                <h3>Sign In</h3>
              </div>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <label className="mb-3 text-light">Email</label>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <label className="mb-3 text-light">Password</label>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <div class="d-flex justify-content-between">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="text-light">Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgot">Forgot password?</Link>
                </div>
                <Form.Item className="text-center">
                  <Button className="btn-warning" to="/dashboard" htmlType="submit">
                  <Link to="/dashboard">login</Link>
                  </Button>
                </Form.Item>
                <p className="text-light">Not registered yet? <Link to="/signup">Create an Account</Link></p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};
