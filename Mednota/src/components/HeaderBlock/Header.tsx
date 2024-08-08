import { useState } from 'react'
import React from 'react';

import { Button, Menu } from 'antd';
import { Flex, Layout, Input } from 'antd';
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
import { MenuOutlined } from '@ant-design/icons';
const Search = Input.Search;
const { Header, Content, Sider, Footer } = Layout;

function HeaderBlock() {
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


      <Header style={S.headerStyle}>
       <S.LeftHand>
       <Flex gap="small" align='center'>
          <MenuOutlined style={{fontSize: '1.1rem'}}/>
         <S.LeftHeader>
          MEDNOTA
         </S.LeftHeader>
         </Flex>
       </S.LeftHand>
      <Flex wrap gap="small" align='center'>
        <Search
    placeholder="input search text"
    style={{ width: 400 }}
    onSearch={value => console.log(value)}
  />
  <S.LangSel>
  <Select
            defaultValue="en"
            onChange={handleChange}
            options={lang}
          />
          </S.LangSel>
        </Flex>
      
       

      </Header>

    </>
  )
}

export default HeaderBlock

