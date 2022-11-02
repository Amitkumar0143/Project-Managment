import React from "react";
import "./SCSS/task/task.css";
import { Tabs, Input } from "antd";
import user from "../assets/img/user.png";
import check from "../assets/img/check-in.png";
import laughing from "../assets/img/laughing.png";
import bg1 from "../assets/img/sider/bg1.jpg";
import bg2 from "../assets/img/sider/bg2.jpg";
import bg3 from "../assets/img/sider/bg3.jpg";
import circle1 from "../assets/img/circle1.png";
import cover from "../assets/img/cover.png";
import profile from "../assets/img/profile -img.png";
import { FaBriefcase, FaHome, FaRecordVinyl } from "react-icons/fa";

const Profile = () => {
  const { TabPane } = Tabs;
  const onChange = () => {};
  return (
    <>
     <section className="profile-page">
       <div className="row">
         <div className="col-sm-9 col-lg-9">
         <div className="profile">
        <div className="fb-profile">
          <img
            align="left"
            className="fb-image-lg"
            src={cover}
            alt="Profile image example"
          />
          <img
            align="left"
            className="fb-image-profile thumbnail"
            src={profile}
            alt=""
          />
          <div className="fb-profile-text">
            <h1>Eli Macy</h1>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
      <div className="introduction">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <ul className="card ">
              <h4>Introduction</h4>
              <li className="intro">
                <FaBriefcase />
                <h5>Product Designer at</h5>
                <a href="#">Bravebist</a>
              </li>
              <li className="intro">
                <FaHome />
                <h5>Live in</h5>
                <a href="#">Hanoi, Vietnam</a>
              </li>
              <li className="intro">
                <FaRecordVinyl />
                <h5>Player name</h5>
                <a href="#">Quan Ha</a>
              </li>
            </ul>
            <div className="card">
              <h4>Your Pages</h4>
              <div className="pages">
                <a href="#">
                  <img src={circle1} alt="" />
                  <h6>Jhone Doe</h6>
                </a>
              </div>
              <div className="pages">
                <a href="#">
                  <img src={circle1} alt="" />
                  <h6>Jhone Doe</h6>
                </a>
              </div>
              <div className="pages">
                <a href="#">
                  <img src={circle1} alt="" />
                  <h6>Jhone Doe</h6>
                </a>
              </div>
              <div className="pages">
                <a href="#">
                  <img src={circle1} alt="" />
                  <h6>Jhone Doe</h6>
                </a>
              </div>
              <div className="pages">
                <a href="#">
                  <img src={circle1} alt="" />
                  <h6>Jhone Doe</h6>
                </a>
              </div>
              
            </div>
          </div>
          <div className="col-sm-6 col-lg-6">
            <div className="card">
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Status" key="1">
                  <div className="add-post d-flex">
                    <img src={circle1} alt="" />
                    <Input
                      placeholder="Write something about yourself"
                    />
                  </div>
                  <div className="media mt-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <a href="#" className="d-flex mt-2">
                        <img src={user} alt=""/>
                        <h6>People</h6>
                      </a>
                      <a href="#" className="d-flex mt-2">
                        <img src={check} />
                        <h6>Photo/Video</h6>
                      </a>
                      <a href="#" className="d-flex mt-2">
                        <img src={laughing} alt=""/>
                        <h6>Activity</h6>
                      </a>
                      <button type="button" className="btn btn-warning">
                        Share
                      </button>
                    </div>
                  </div>
                  <div className="post">
                    <div className="content pt-2 pb-2 m-3">
                      <img src={circle1} alt="" />
                      <h6>Jhone Doe post new albums</h6>
                      <span>6 hours ago</span>
                    </div>
                    <img src={bg2} width="100%" alt="" />
                  </div>
                </TabPane>
                <TabPane tab="Photo" key="2">
                  <div className="album">
                    <div className="row">
                      <div className="col-sm-3 col-lg-3">
                        <img src={bg1} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg3} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg1} width="100%" alt=""/>
                      </div>
                      <div className="col-sm-3 col-lg-3">
                        <img src={bg1} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg3} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg1} width="100%" alt=""/>
                      </div>
                      <div className="col-sm-3 col-lg-3">
                        <img src={bg1} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg3} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg1} width="100%" alt=""/>
                      </div>
                      <div className="col-sm-3 col-lg-3">
                        <img src={bg1} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg3} width="100%" alt=""/>
                        <img src={bg2} width="100%" alt=""/>
                        <img src={bg1} width="100%" alt=""/>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-warning" type="button">
                        See More
                      </button>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Activity" key="3">
                  <div className="post">
                    <div className="content pt-2 pb-2">
                      <img src={circle1} alt="" />
                      <h6>Jhone Doe post new albums</h6>
                      <span>6 hours ago</span>
                    </div>
                    <img src={bg2} width="100%" alt="" />
                  </div>
                  <div className="post">
                    <div className="content pt-2 pb-2">
                      <img src={circle1} alt="" />
                      <h6>Jhone Doe post new albums</h6>
                      <span>6 hours ago</span>
                    </div>
                    <img src={bg1} width="100%" alt="" />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
         </div>
         <div className="col-sm-3 col-lg-3">
          <div className="card"> 
           <ul className="stories-list">
           <h4>STORIES</h4>
             <li>
               <img src={circle1} alt="" />
               <h6>Jhone Doe</h6>
               <p>15 minute ago</p>
             </li> 
             <li>
               <img src={circle1} alt="" />
               <h6>Jhone Doe</h6>
               <p>2 hours ago</p>
             </li> 
             <li>
               <img src={circle1} alt="" />
               <h6>Jhone Doe</h6>
               <p>10 minute ago</p>
             </li> 
             <li>
               <img src={circle1} alt="" />
               <h6>Jhone Doe</h6>
               <p>12 hours ago</p>
             </li> 
           </ul>
           <ul className="contact">
           <h4>CONTACT</h4> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-success"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-success"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-warning"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-success"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-warning"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-success"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-warning"></span>
                  </div>
              </a>
             </li> 
             <li>
              <a href="#">
              <img src={circle1} alt="" />
               <div class="stories d-flex justify-content-between">
                  <h6>Jhone Doe</h6>
                  <span className="active btn-success"></span>
                  </div>
              </a>
             </li> 
           </ul>
          </div>
         </div>
       </div>
     </section>
    </>
  );
};

export default Profile;
