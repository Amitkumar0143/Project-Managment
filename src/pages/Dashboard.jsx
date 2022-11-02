import React from "react";
import "./SCSS/dashboard/dashboard.css";
import "antd/dist/antd.css";
import circle1 from "../assets/img/circle1.png";
import bg1 from "../assets/img/sider/bg1.jpg";
import bg2 from "../assets/img/sider/bg2.jpg";
import bg3 from "../assets/img/sider/bg3.jpg";
import { Table, Carousel, Badge, Checkbox,Image } from "antd";
import { Donut } from "../chart/Donut";
import {LineChart} from "../chart/LineChart"
import {
  FaRegHandPointUp,
  FaRegHandPointDown,
  FaFileAlt,
  FaCloudUploadAlt,
  FaClock,
  FaEnvelope,
  FaChartPie,
  FaCodepen,
  FaBriefcase,
  FaTv,
} from "react-icons/fa";

const { Column } = Table;

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const data = [
  {
    key: "1",
    select: [<Checkbox />],
    name: "Jhone Doe",
    no: "02312",
    cost: "$546",
    project: "Dashboard",
    payment: "	Credit card",
    date: "04 Dec 2019",
    status: [<Badge className="text-success">Approved</Badge>],
  },
  {
    key: "2",
    select: [<Checkbox />],
    name: "Henry Klein",
    no: "02312",
    cost: "$14,500",
    project: "Website",
    payment: "Cash on delivered",
    date: "04 Dec 2019",
    status: [<Badge className="text-warning">Pending</Badge>],
  },
  {
    key: "3",
    select: [<Checkbox />],
    name: "Estella Bryan",
    no: "02312",
    cost: "$546",
    project: "App design",
    payment: "	Credit card",
    date: "04 Dec 2019",
    status: [<Badge className="text-danger">Rejected</Badge>],
  },
  {
    key: "4",
    select: [<Checkbox />],
    name: "Peter Gill",
    no: "02312",
    cost: "$546",
    project: "Development",
    payment: "Peter Gill",
    date: "04 Dec 2019",
    status: [<Badge className="text-success">Approved</Badge>],
  },
  {
    key: "5",
    select: [<Checkbox />],
    name: "Jhone Doe",
    no: "02312",
    cost: "$546",
    project: "Dashboard",
    payment: "	Credit card",
    date: "04 Dec 2019",
    status: [<Badge className="text-success">Approved</Badge>],
  },
  {
    key: "6",
    select: [<Checkbox />],
    name: "Sallie Reyes",
    no: "02312",
    cost: "$546",
    project: "Website",
    payment: "	Credit card",
    date: "04 Dec 2019",
    status: [<Badge className="text-success">Approved</Badge>],
  },
];

export const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="row">
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$12.34</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success">
                    <FaRegHandPointUp />
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">
                Potential growth
              </h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$17.34</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +11%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success">
                    <FaRegHandPointUp />
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Revenue current</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$12.34</h3>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">
                      -2.4%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-danger">
                    <FaRegHandPointDown />
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Daily Income</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$31.53</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success">
                    <FaRegHandPointUp />
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Expense current</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Transaction History</h4>
              <Donut />
              <div className="transfer d-flex justify-content-between p-3 mt-3">
                <div className="text-md-center text-xl-left">
                  <h6 className="mb-1">Transfer to Paypal</h6>
                  <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                </div>
                <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                  <h6 className="font-weight-bold mb-0">$236</h6>
                </div>
              </div>
              <div className="transfer d-flex justify-content-between p-3 mt-3">
                <div className="text-md-center text-xl-left">
                  <h6 className="mb-1">Transfer to Paypal</h6>
                  <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                </div>
                <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                  <h6 className="font-weight-bold mb-0">$236</h6>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h4 className="card-title mb-1">Open Projects</h4>
                <p className="text-muted mb-1">Your data status</p>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="preview-list">
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail p-3 ">
                        <div className="preview-icon bg-primary">
                          <FaFileAlt />
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">
                            Admin dashboard design
                          </h6>
                          <p className="text-muted mb-0">
                            Broadcast web app mockup
                          </p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">15 minutes ago</p>
                          <p className="text-muted mb-0">30 tasks, 5 issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail p-3 ">
                        <div className="preview-icon bg-success">
                          <FaCloudUploadAlt />
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">
                            Wordpress Development
                          </h6>
                          <p className="text-muted mb-0">Upload new design</p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">1 hour ago</p>
                          <p className="text-muted mb-0">23 tasks, 5 issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail p-3 ">
                        <div className="preview-icon bg-info">
                          <FaClock />
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Project meeting</h6>
                          <p className="text-muted mb-0">
                            New project discussion
                          </p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">35 minutes ago</p>
                          <p className="text-muted mb-0">15 tasks, 2 issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail p-3 ">
                        <div className="preview-icon bg-danger">
                          <FaEnvelope />
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Broadcast Mail</h6>
                          <p className="text-muted mb-0">
                            Sent release details to team
                          </p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">55 minutes ago</p>
                          <p className="text-muted mb-0">35 tasks, 7 issues</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item">
                      <div className="preview-thumbnail p-3 ">
                        <div className="preview-icon bg-warning">
                          <FaChartPie />
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">UI Design</h6>
                          <p className="text-muted mb-0">
                            New application planning
                          </p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">50 minutes ago</p>
                          <p className="text-muted mb-0">27 tasks, 4 issues</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$32123</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    11.38% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text text-primary revenue">
                  <FaCodepen className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$45850</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +8.3%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    9.61% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right revenue ">
                  <FaBriefcase className="text-danger" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Purchase</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">$2039</h2>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">
                      -2.1%
                    </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">
                    2.27% Since last month
                  </h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right revenue">
                  <FaTv className="text-success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
        <div className="card">
          <h4 className="card-title">Project Status</h4>
          <Table  dataSource={data}>
            <Column title="" dataIndex="select" key="select" />
            <Column title="Client Name" dataIndex="name" key="name" />
            <Column title="Order No" dataIndex="no" key="no" />
            <Column title="Product Cost" dataIndex="cost" key="cost" />
            <Column title="Project" dataIndex="project" key="project" />
            <Column title="Payment" dataIndex="payment" key="payment" />
            <Column title="Start Data" dataIndex="date" key="date" />
            <Column title="Payment Status" dataIndex="status" key="status" />
          </Table>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">Message</h4>
            <div class="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail p-3 ">
                          <img
                            src={circle1}
                            alt="image5"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div
                              className="d-flex d-md-block d-xl-flex justify-content-between mt-3"
                            >
                              <h6 className="preview-subject">Leonard</h6>
                              <p className="text-muted text-small">5 minutes ago</p>
                            </div>
                            <p className="text-muted">
                              Well, it seems to be working now.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail p-3 ">
                          <img
                            src={circle1}
                            alt="image1"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div
                              className="d-flex d-md-block d-xl-flex justify-content-between mt-3"
                            >
                              <h6 className="preview-subject">Luella Mills</h6>
                              <p className="text-muted text-small">
                                10 Minutes Ago
                              </p>
                            </div>
                            <p className="text-muted">
                              Well, it seems to be working now.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail p-3 ">
                          <img
                            src={circle1}
                            alt="image2"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div
                              className="d-flex d-md-block d-xl-flex justify-content-between mt-3"
                            >
                              <h6 className="preview-subject">Ethel Kelly</h6>
                              <p className="text-muted text-small">2 Hours Ago</p>
                            </div>
                            <p className="text-muted">Please review the tickets</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail p-3 ">
                          <img  
                            src={circle1}
                            alt="image4"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div
                              className="d-flex d-md-block d-xl-flex justify-content-between mt-3"
                            >
                              <h6 className="preview-subject">Herman May</h6>
                              <p className="text-muted text-small">4 Hours Ago</p>
                            </div>
                            <p className="text-muted">
                              Thanks a lot. It was easy to fix it .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">Portfolio Slide</h4>
            <Carousel afterChange={onChange}>
              <div>
                <Image src={bg1} width="100%" />
                <div className="preview-item-content d-flex flex-grow mt-3">
                  <div className="flex-grow">
                    <div className="d-flex d-md-block d-xl-flex justify-content-between mt-3">
                      <h6 className="preview-subject">Leonard</h6>
                      <p className="text-muted text-small">5 minutes ago</p>
                    </div>
                    <p className="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>
              <div>
                <Image src={bg2} width="100%" />
                <div className="preview-item-content d-flex flex-grow mt-3">
                  <div className="flex-grow">
                    <div className="d-flex d-md-block d-xl-flex justify-content-between mt-3">
                      <h6 className="preview-subject">Leonard</h6>
                      <p className="text-muted text-small">5 minutes ago</p>
                    </div>
                    <p className="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>
              <div>
                <Image src={bg3} width="100%" />
                <div className="preview-item-content d-flex flex-grow mt-3 ">
                  <div className="flex-grow">
                    <div className="d-flex d-md-block d-xl-flex justify-content-between mt-3">
                      <h6 className="preview-subject">Leonard</h6>
                      <p className="text-muted text-small">5 minutes ago</p>
                    </div>
                    <p className="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">To Do List</h4>
            <LineChart/>
          </div>
        </div>
      </div>
    </section>
  );
};
