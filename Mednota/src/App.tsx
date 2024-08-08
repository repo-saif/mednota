import { useState } from 'react'
import React from 'react';

import './App.css'
import Test from './Test'
import { Button, Menu } from 'antd';
import { Flex, Layout } from 'antd';
import type { MenuProps } from 'antd';
import './i18n/config'
import { Select, Space } from 'antd';
import * as S from './styles'
import { routes } from './routes'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useTranslation, initReactI18next } from "react-i18next";
import { lang } from './utils/lang';
import i18next from 'i18next';
import { HeaderBlock, SideNav } from './components';

const { Header, Content, Sider, Footer } = Layout;
const router = createBrowserRouter(routes);

function App() {
  const { t } = useTranslation();
  const items1: MenuProps['items'] = [t('menu.home'), t('menu.patients'), t('menu.hospitals')].map((key) => ({
    key,
    label: `${key}`,
  }));
  const handleChange = (value: string) => {
    i18next.changeLanguage(value)
  };


  return (
    <>

      <Layout style={S.layoutStyle}>
        <Sider width='300'>
          <SideNav />
        </Sider>
        <Layout>
          <HeaderBlock />
          <Content style={S.contentStyle}>
            <div style={{ margin: '0 1rem' }}>
              <RouterProvider router={router} />
            </div>

          </Content>
          <Footer style={S.footerStyle}>Footer</Footer>
        </Layout>
      </Layout>

    </>
  )
}

export default App

