import React,{useState} from "react";
import 'antd/dist/antd.css';
import { Progress,Modal, Button } from 'antd';
import circle1 from "../assets/img/circle1.png";


const Project = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
  return (
  <>
    <section className="project">
      <div className="row">
      <div class="d-flex justify-content-between">
          <button className="btn btn-warning" type="button"> Create project</button>
      </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-success float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                  App Design and Develop
                </a>
              </h4>
              <p className="text-success text-uppercase ">Android</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">77</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">875</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-success float-end">100%</span>
              </h5>
              <Progress percent={100} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-primary  float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                  New Admin Design
                </a>
              </h4>
              <p className="text-primary  text-uppercase ">Android</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">56</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">452</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-primary  float-end">30%</span>
              </h5>
              <Progress percent={30} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-pink float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                Landing page Design
                </a>
              </h4>
              <p className="text-pink text-uppercase ">Website Designe</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">87</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">125</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-pink float-end">86%</span>
              </h5>
              <Progress percent={86} status="exception" />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-warning float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                  App Design and Develop
                </a>
              </h4>
              <p className="text-warning text-uppercase ">Android</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">77</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">875</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-warning float-end">45%</span>
              </h5>
              <Progress className="warning" percent={45} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-info float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                  App Design and Develop
                </a>
              </h4>
              <p className="text-info text-uppercase ">Android</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">77</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">875</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-info float-end">60%</span>
              </h5>
              <Progress className="info" percent={60} />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <div className="card">
            <div className="card-body project-box">
              <div className="badge bg-primary float-end">Completed</div>
              <h4 className="mt-0">
                <a href="" className="text-light">
                  App Design and Develop
                </a>
              </h4>
              <p className="text-primary text-uppercase ">Android</p>
              <p className="text-muted ">
                New common language will be more simple and regular than the
                existing European languages...
                <a href="#" className="text-primary">
                  View more
                </a>
              </p>

              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <h4 className="mb-0">77</h4>
                  <p className="text-muted">Questions</p>
                </li>
                <li className="list-inline-item">
                  <h4 className="mb-0">875</h4>
                  <p className="text-muted">Comments</p>
                </li>
              </ul>

              <div className="project-members mb-2">
                <h5 className="float-start me-3">Team :</h5>
                <div className="avatar-group">
                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Mat Helme"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Michael Zenaty"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>

                  <a
                    href="#"
                    className="avatar-group-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="James Anderson"
                  >
                    <img src={circle1} className="avatar-sm" alt="friend" />
                  </a>
                </div>
              </div>

              <h5>
                Progress <span className="text-primary float-end">50%</span>
              </h5>
              <Progress percent={50} status="active" />
            </div>
          </div>
        </div>
            
      </div>
    </section>
    <Button type="primary" onClick={showModal}>
    Open Modal
  </Button>
  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
  </>
  );
};

export default Project;
