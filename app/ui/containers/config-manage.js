/**
 * id: configManage
 */
'use strict'

import React, { Component } from 'react'
import { Button, Row, Col, Menu, Input } from 'antd'
import './config-manage.styl'

const ID = 'configManage'
const electron = require('electron')
const { ipcRenderer, remote } = electron
const { dialog } = remote
const path = require('path')

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savePathes: []
        }
    }
    callDialog() {
        dialog.showOpenDialog({
            title: '请选择添加的配置文件',
            properties: ['openFile', 'multiSelections']
        }, pathes => {
            ipcRenderer.send(`${ID}-add`, pathes)
        })
    }
    fetchList() {
        ipcRenderer.send(`${ID}-fetch`)
    }
    register() {
        ipcRenderer.on(`${ID}-fetch-cb`, (event, pathList) => {
            this.setState({
                savePathes: pathList
            })
        })
    }
    componentDidMount() {
        this.register()
        this.fetchList()
    }
    render() {
        return (
            <div className='con-config-manage'>
                <Row gutter={16}>
                    <Col span={4}>
                        <Input.Search onSearch={ value => console.log(value) } />
                        <Menu theme='dark'>
                            <Menu.Item>菜单项</Menu.Item>
                            <Menu.Item>
                                { this.state.savedPathes }
                            </Menu.Item>
                        </Menu>
                        <Button type='primary' onClick={ this.callDialog }>
                            asd
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
