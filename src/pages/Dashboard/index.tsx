import React from 'react';
import './style.ts';
import { Title } from './style';
import logo from '../../assets/img/logo.svg'

const Dashboard: React.FC = () => {
    return (<>
        <img src={logo} alt="Github explorer" />
        <Title>Dashboard</Title>
    </>);
}

export default Dashboard;