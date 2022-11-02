import React from "react";
import "./SCSS/chat/Chat.css";
import circle from "../assets/img/circle1.png";
import { Input } from "antd";
import {
    TiAttachmentOutline,
    TiLocationArrow,
    TiVideo,
    TiPhone,
    TiZoomOutline
  } from "react-icons/ti";

const { TextArea } = Input;
const Chat = () => {
  return (
    <section className="chat pt-3">
      <div className="row">
        <div className="col-sm-3 col-lg-3">
          <div className="card mb-sm-3 mb-md-0 contacts_card">
            <div className="card-header">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  name=""
                  className="form-control search"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text search_btn">
                   <TiZoomOutline />
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body contacts_body">
              <ui className="contacts">
                <li className="active">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                      <span>Khalid</span>
                      <p>Kalid is online</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon offline"></span>
                    </div>
                    <div className="user_info">
                      <span>Taherah Big</span>
                      <p>Taherah left 7 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                      <span>Sami Rafi</span>
                      <p>Sami is online</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg"
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon offline"></span>
                    </div>
                    <div className="user_info">
                      <span>Nargis Hawa</span>
                      <p>Nargis left 30 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon offline"></span>
                    </div>
                    <div className="user_info">
                      <span>Rashid Samim</span>
                      <p>Rashid left 50 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src={circle}
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon offline"></span>
                    </div>
                    <div className="user_info">
                      <span>Rashid Samim</span>
                      <p>Rashid left 50 mins ago</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                      <img
                        src={circle}
                        className="rounded-circle user_img"
                        alt=""
                      />
                      <span className="online_icon offline"></span>
                    </div>
                    <div className="user_info">
                      <span>Rashid Samim</span>
                      <p>Rashid left 50 mins ago</p>
                    </div>
                  </div>
                </li>
              </ui>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="col-sm-9 col-lg-9">
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img"
                    alt=""
                  />
                  <span className="online_icon"></span>
                </div>
                <div className="user_info">
                  <span>Chat with Khalid</span>
                  <p>1767 Messages</p>
                </div>
                <div className="video_cam">
                  <span>
                   <TiPhone/>
                  </span>
                  <span>
                   <TiVideo/>
                  </span>
                </div>
              </div>

            </div>
            <div className="card-body msg_card_body">
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
                <div className="msg_cotainer">
                  Hi, how are you samim?
                  <span className="msg_time">8:40 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  Hi Khalid i am good tnx how about you?
                  <span className="msg_time_send">8:55 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src={circle} className="rounded-circle user_img_msg"
                  alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
                <div className="msg_cotainer">
                  I am good too, thank you for your chat template
                  <span className="msg_time">9:00 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  You are welcome
                  <span className="msg_time_send">9:05 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img src={circle} className="rounded-circle user_img_msg"
                  alt="" />
                  
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
                <div className="msg_cotainer">
                  I am looking for your next templates
                  <span className="msg_time">9:07 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                  Ok, thank you have a good day
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img
                    src={circle}
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
                <div className="msg_cotainer">
                  Bye, see you
                  <span className="msg_time">9:12 AM, Today</span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                Bye, see you soon
                  <span className="msg_time_send">9:10 AM, Today</span>
                </div>
                <div className="img_cont_msg">
                  <img
                    src={circle}
                    alt=""
                    className="rounded-circle user_img_msg"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                  <img
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
                <div className="msg_cotainer">
                 Hlo dude
                  <span className="msg_time">5:00 PM, Today</span>
                </div>
              </div>

            </div>
            <div className="card-footer d-flex justify-content-between">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn">
                    <TiAttachmentOutline />
                  </span>
                </div>

                <TextArea
                  rows={4}
                  placeholder="Type your message..."
                  className="type_msg"
                  maxLength={6}
                />
                <div className="input-group-append">
                  <span className="input-group-text send_btn">
                    <TiLocationArrow />
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
