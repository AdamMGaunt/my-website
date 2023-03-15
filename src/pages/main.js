import React, {Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import styled from 'styled-components';
import BaseLayout from '../components/baseLayout';
import MyAppbar from '../components/appbar';

export default function MainPage() {
    return (
        <>
            <BaseLayout>
                <MyAppbar />
            </BaseLayout>
        </>
        )
};