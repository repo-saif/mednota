import { useState } from 'react'
import React from 'react';

import { Button, Menu } from 'antd';
import { Flex, Layout } from 'antd';
import type { MenuProps } from 'antd';
import '../../i18n/config'
import { Select, Space } from 'antd';
import * as S from './styles'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useTranslation, initReactI18next } from "react-i18next";
import { lang } from '../../utils/lang';
import i18next from 'i18next';
import {
  DashboardOutlined,
  BuildOutlined,
  UserOutlined,
  UserAddOutlined,
  LoginOutlined
} from '@ant-design/icons';
const { Header, Content, Sider, Footer } = Layout;

function SideNav() {
  const { t } = useTranslation();
 
  
  const items1: MenuProps[] = [
    {
      key: t('menu.dashboard'),
      label: t('menu.dashboard'),
      icon: <DashboardOutlined />
    },
    {
      key: t('menu.hospitals'),
      label: t('menu.hospitals'),
      icon: <BuildOutlined />,
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
        { key: '3', label: 'Option 3' },
        { key: '4', label: 'Option 4' },
      ],
    },
    {
      key: t('menu.patients'),
      label: t('menu.patients'),
      icon: <UserOutlined />,
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
        { key: '3', label: 'Option 3' },
        { key: '4', label: 'Option 4' },
      ],
    },
    {
      key: t('menu.my_account'),
      label: t('menu.my_account'),
      icon: <UserAddOutlined />,
      children: [
        { key: '1', label: 'Edit Account' },
        { key: '2', label: 'Reset Password' },
        { key: '3', label: 'Reset Email' },
        { key: '4', label: 'Close Account' },
      ]
    },
    {
      key: t('menu.logout'),
      label: t('menu.logout'),
      icon: <LoginOutlined />
    }
    ];
  const handleChange = (value: string) => {
    i18next.changeLanguage(value)
  };


  return (
    <>
     <S.sideHeader>
     <p>
        Main Dashboard
      </p>
     </S.sideHeader>
      <S.MenuWrapper>
      
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[t('menu.dashboard')]}
          items={items1}
          style={{}}
        />
        </S.MenuWrapper>
    </>
  )
}

export default SideNav

