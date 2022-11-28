import React, {useState} from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => {
    const [current, setCurrent] = useState();

    const items=[
        {"label":'NodeBird', "link":"/", keys:"home"},
        {"label":'프로필', "link":"/profile", keys:"prfl"},
        {"label":'회원가입', "link":"/signup", keys:"sgin"},
    ];
    return <Menu items={items} mode="horizontal" defaultOpenKeys={["home"]}/>
}

AppLayout.propTypes={
    children: propTypes.node.isRequired,
};

export default AppLayout;