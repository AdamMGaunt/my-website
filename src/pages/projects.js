import React, {Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import styled from 'styled-components';
import BaseLayout from '../components/baseLayout';

export default function MainPage() {
    return (
        <>
            <p>this is projects</p>
            <Link to={`main`}>home</Link>
            <Outlet />
        </>
        )
};