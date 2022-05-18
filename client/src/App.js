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


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route exact path="/404" element={<NotFoundPage activeBPM={false}/>} />
                    <Route exact path="/LogIn" element={<LogInPage/>} />
                    <Route exact path="/CreateUser" element={<CreateUserPage/>} />
                    <Route exact path='/About' element={<About/>} />
                    <Route exact path='/Admin' element={<Admin/>} />
                    {/* <Navigate to="/404"/> */}
                </Routes>
            </BrowserRouter>
        );
    }
} export default App;