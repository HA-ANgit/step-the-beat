import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

//components
import { Component } from 'react';

//pages
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage';
import LogInPage from './pages/LogInPage';
import CreateUserPage from "./pages/CreateUserPage";
import About from './pages/About';
import Admin from './pages/Admin';
//import Dashboard from './pages/Dashboard';


class App extends Component {
    render() {
        const account = localStorage.getItem("token");
        return (
            <BrowserRouter>
                <Routes>
                    {account && <Route exact path="/" element={<Main/>} />}
                    <Route exact path="/404" element={<NotFoundPage activeBPM={false}/>} />
                    <Route exact path="/LogIn" element={<LogInPage/>} />
                    <Route exact path="/CreateUser" element={<CreateUserPage/>} />
                    <Route exact path='/About' element={<About/>} />
                    <Route exact path='/Admin' element={<Admin/>} />
                    {/* <Route exact path='/Dashboard' element={<Dashboard/>} /> */}
                    <Route path="/" exact element={<Navigate replace to="/login"/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
} export default App;