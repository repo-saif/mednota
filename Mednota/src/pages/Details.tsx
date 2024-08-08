import { useState } from 'react'

import React from 'react';
import { Button, Menu, Flex, Layout, Col, Row  } from 'antd';
import { Outlet, Link } from "react-router-dom";

function Details() {

const { Header, Content, Sider, Footer } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  color: '#ffffff'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px'
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px'
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center'
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  minHeight: '100%'
};

  return (
    <>Details
    
    </>
  )
}

export default Details
