import React, { useState } from "react";
import "antd/dist/antd.css";
import "./SCSS/project/project.css";
import AddTaskModal from "../component/AddTaskModal";

const Analytics = () => {
  return (
    <>
      <section className="Task">
        <div className="row">
          <div className="col-sm-4 col-lg-4">
            <div className="card">
              <div class="d-flex justify-content-between">
                <h4>To Do</h4>
       
                <AddTaskModal/>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Analytics;
