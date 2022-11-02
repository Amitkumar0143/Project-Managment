import React from "react";
import "antd/dist/antd.css";
import "./SCSS/common/common.css";
import { UploadOutlined, CopyOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Checkbox,
  Button,
  message,
  Upload,
  Radio,
  Select,
  AutoComplete,
  Cascader,
  Col,
  DatePicker,
  InputNumber,
  Row,
  Tooltip,
} from "antd";
const { TextArea } = Input;
const { Option } = Select;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const props = {
  name: "file",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export const FormElement = () => {
  return (
    <section className="form_Element">
      <div className="row">
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
          <div className="card">
            <h4 className="card-title">Default form</h4>
            <p className="card-description">Basic form layout</p>
            <Form className="forms-sample">
              <Form.Item>
                <label>Name</label>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <label>Confirm Password</label>
                <Input placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox> Remember me</Checkbox>
              </Form.Item>
              <div className="button">
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
          <div className="card">
            <h4 className="card-title">Horizontal Form</h4>
            <p className="card-description">Horizontal form layout</p>
            <Form className="forms-sample">
              <div className="row">
                <div className="col-sm-3">
                  <Form.Item label="First Name" />
                  <Form.Item label="Last Name" />
                  <Form.Item label="Email" />
                  <Form.Item label="Mobile" />
                  <Form.Item label="Password" />
                  <Form.Item label="Confirm Password" />
                </div>
                <div className="col-sm-9">
                  <Input className="mb-3" placeholder="First name" />
                  <Input className="mb-3" placeholder="Last name" />
                  <Input className="mb-3" placeholder="Email" />
                  <Input className="mb-3" placeholder="Mobile no" />
                  <Input className="mb-3" placeholder="Password" />
                  <Input className="mb-3" placeholder="Confirm Password" />
                </div>
              </div>
              <Checkbox className="mb-3"> Remember me</Checkbox>
              <div className="button">
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 grid-margin stretch-card">
          <div className="card">
            <h4 className="card-title">Default form</h4>
            <p className="card-description">Basic form layout</p>
            <Form className="forms-sample">
              <Form.Item>
                <label>Name</label>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <label>Confirm Password</label>
                <Input placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <label>Gender</label>
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <label>File upload</label>
                <br></br>
                <Input placeholder="Upload" disabled style={{ width: "89%" }} />
                <Upload {...props}>
                  <Button type="primary" icon={<UploadOutlined />}>
                    Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <label>City</label>
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item>
                <label>Textarea</label>
                <TextArea
                  rows={4}
                  placeholder="maxLength is 6"
                  maxLength={6}
                  style={{ height: "20%" }}
                />
              </Form.Item>

              <div className="button">
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
          <div className="card">
            <h4 className="card-title">Input Size </h4>
            <p className="card-description">
              Add classes like .form-control-lg and .form-control-sm.
            </p>
            <Form className="forms-sample">
              <Form.Item>
                <Input
                  className="form-control-sm"
                  type="text"
                  style={{ height: "73px" }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  className="form-control-md"
                  type="text"
                  style={{ height: "50px" }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  className="form-control-lg"
                  type="text"
                  style={{ height: "20px" }}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
          <div className="card">
            <h4 className="card-title">Select Size </h4>
            <p className="card-description">
              Add classes like .form-control-lg and .form-control-sm.
            </p>
            <Form className="forms-sample">
              <Form.Item>
                <Select defaultValue="1" style={{ height: "73px" }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select defaultValue="1" style={{ height: "50px" }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select defaultValue="1" style={{ height: "20px" }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 grid-margin stretch-card">
          <div className="card">
          <h4 className="card-title" Checkbox> Basic input</h4>
            <p className="card-description">Basic Ant design input groups </p>
            <div className="forms-sample">
              <Input.Group size="large">
                <Row gutter={8}>
                  <Col span={5}>
                    <Input defaultValue="0571" />
                  </Col>
                  <Col span={8}>
                    <Input defaultValue="26888888" />
                  </Col>
                </Row>
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input
                  style={{
                    width: "20%",
                  }}
                  defaultValue="0571"
                />
                <Input
                  style={{
                    width: "30%",
                  }}
                  defaultValue="26888888"
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input
                  style={{
                    width: "calc(100% - 200px)",
                  }}
                  defaultValue="https://ant.design"
                />
                <Button type="primary">Submit</Button>
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input
                  style={{
                    width: "calc(100% - 200px)",
                  }}
                  defaultValue="git@github.com:ant-design/ant-design.git"
                />
                <Tooltip title="copy git url">
                  <Button icon={<CopyOutlined />} />
                </Tooltip>
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select defaultValue="Zhejiang">
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                <Input
                  style={{
                    width: "50%",
                  }}
                  defaultValue="Xihu District, Hangzhou"
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input.Search
                  allowClear
                  style={{
                    width: "40%",
                  }}
                  defaultValue="0571"
                />
                <Input.Search
                  allowClear
                  style={{
                    width: "40%",
                  }}
                  defaultValue="26888888"
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select defaultValue="Option1">
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
                <Input
                  style={{
                    width: "50%",
                  }}
                  defaultValue="input content"
                />
                <InputNumber />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input
                  style={{
                    width: "50%",
                  }}
                  defaultValue="input content"
                />
                <DatePicker
                  style={{
                    width: "50%",
                  }}
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Input
                  style={{
                    width: "30%",
                  }}
                  defaultValue="input content"
                />
                <DatePicker.RangePicker
                  style={{
                    width: "70%",
                  }}
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select defaultValue="Option1-1">
                  <Option value="Option1-1">Option1-1</Option>
                  <Option value="Option1-2">Option1-2</Option>
                </Select>
                <Select defaultValue="Option2-2">
                  <Option value="Option2-1">Option2-1</Option>
                  <Option value="Option2-2">Option2-2</Option>
                </Select>
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select defaultValue="1">
                  <Option value="1">Between</Option>
                  <Option value="2">Except</Option>
                </Select>
                <Input
                  style={{
                    width: 100,
                    textAlign: "center",
                  }}
                  placeholder="Minimum"
                />
                <Input
                  className="site-input-split"
                  style={{
                    width: 30,
                    borderLeft: 0,
                    borderRight: 0,
                    pointerEvents: "none",
                  }}
                  placeholder="~"
                  disabled
                />
                <Input
                  className="site-input-right"
                  style={{
                    width: 100,
                    textAlign: "center",
                  }}
                  placeholder="Maximum"
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select
                  defaultValue="Sign Up"
                  style={{
                    width: "30%",
                  }}
                >
                  <Option value="Sign Up">Sign Up</Option>
                  <Option value="Sign In">Sign In</Option>
                </Select>
                <AutoComplete
                  style={{
                    width: "70%",
                  }}
                  placeholder="Email"
                  options={[
                    {
                      value: "text 1",
                    },
                    {
                      value: "text 2",
                    },
                  ]}
                />
              </Input.Group>
              <br />
              <Input.Group compact>
                <Select
                  style={{
                    width: "30%",
                  }}
                  defaultValue="Home"
                >
                  <Option value="Home">Home</Option>
                  <Option value="Company">Company</Option>
                </Select>
                <Cascader
                  style={{
                    width: "70%",
                  }}
                  options={options}
                  placeholder="Select Address"
                />
              </Input.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
          <div className=" card">
          <h4 className="card-title" Checkbox> Controls</h4>
            <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
            <div className="row">
              <div className="col-sm-6">
                <Form.Item>
                  <Checkbox className="text-primary">
                    {" "}
                    Checkbox primary
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox className="text-danger"> Checkbox danger</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox className="text-successs"> Checkbox success</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox className="text-warning"> Checkbox warning</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox className="text-info "> Checkbox info</Checkbox>
                </Form.Item>
              </div>
              <div className="col-sm-6">
                <Form.Item>
                  <Radio className="text-primary">Radio primary</Radio>
                </Form.Item>
                <Form.Item>
                  <Radio className="text-danger">Radio danger</Radio>
                </Form.Item>
                <Form.Item>
                  <Radio className="text-success">Radio success</Radio>
                </Form.Item>
                <Form.Item>
                  <Radio className="text-warning">Radio warning</Radio>
                </Form.Item>
                <Form.Item>
                  <Radio className="text-info">Radio info</Radio>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 grid-margin stretch-card">
         <div className="card">
         <div className="row">
            <div className="col-sm-6">
            <Form className="forms-sample">
              <Form.Item>
                <label>Name</label>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <label>Confirm Password</label>
                <Input placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox> Remember me</Checkbox>
              </Form.Item>
              <div className="button">
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form>
            </div>
            <div className="col-sm-6">
            <Form className="forms-sample">
              <Form.Item>
                <label>Name</label>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <label>Confirm Password</label>
                <Input placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox> Remember me</Checkbox>
              </Form.Item>
              <div className="button">
                <Button type="primary">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </Form>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};
