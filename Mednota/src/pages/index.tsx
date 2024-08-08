import { useState } from 'react'
import '../App.css'
import React from 'react';
import { Button, Menu, Flex, Layout, Col, Row } from 'antd';
import { Outlet, Link } from "react-router-dom";
import * as S from './styles'

import { useStore } from 'store/store'

function App() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>

      </Col>
      <Col span={12}>

      </Col>
    </Row>
  )
}

export default App
