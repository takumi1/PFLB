import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="1">
                <NavLink to="/clothes">Одежда</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/electronics">Электроника</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to="/food">Еда</NavLink>
            </Menu.Item>
        </Menu>
    );
};