import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import Sidebar from "./component/Sidebar";
import { Table } from "./pages/Table";
import { FormElement } from "./pages/FormElement";
import Chat from "./pages/Chat";
import Chart from "./pages/Chart";
import CalenderComp from "./pages/Calender";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import { Login } from "./Authentication/Login";
import { ForgotPassword } from "./Authentication/ForgotPassword";
import { SignUp } from "./Authentication/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
    
            <Route path="" element={<Login/>}/>
            <Route path="forgot" element={<ForgotPassword/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="/" element={<Sidebar />}>
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="chart" element={<Chart/>} />
            <Route path="calender" element={<CalenderComp />} />
            <Route path="table" element={<Table />} />
            <Route path="form_element" element={<FormElement />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="project" element={<Project />}/>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
