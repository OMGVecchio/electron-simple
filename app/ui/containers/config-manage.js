'use strict'

import React, { Component } from 'react'
import { Button, Row, Col, Menu, Input } from 'antd'
import './config-manage.styl'

const electron = require('electron')

export default class Test extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='con-config-manage'>
                <Row gutter={16}>
                    <Col span={4}>
                        <Input.Search onSearch={value => console.log(value)} />
                        <Menu theme="dark">
                            <Menu.Item>菜单项</Menu.Item>
                            <Menu.Item>子菜单项</Menu.Item>
                        </Menu>
                        <Button type="primary">
                            新增
                        </Button>
                    </Col>
                    <Col span={20}>
                        <Input.TextArea rows="45" />
                    </Col>
                </Row>
            </div>
        )
    }
}
