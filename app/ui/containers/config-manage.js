/**
 * 每个模块给一个 ID 标识
 * id: configManage
 */

'use strict'

import { Button, Row, Col, Menu, Input } from 'antd'
import './config-manage.styl'

const ID = 'configManage'
const { ipcRenderer, remote } = electron
const { dialog } = remote
const basename = require('path').basename

export default class Test extends Component {
    /**
     * 原生
     */
    constructor(props) {
        super(props)
        this.state = {
            savedPathes: {},
            selectFilePath: '',
            fileContent: ''
        }
    }
    componentDidMount() {
        this.register()
        this.fetchList()
    }
    /**
     * 扩展
     */
    callDialog() {
        dialog.showOpenDialog({
            title: '请选择添加的配置文件',
            properties: ['openFile', 'multiSelections']
        }, pathes => {
            if(!pathes) return
            ipcRenderer.send(`${ID}-add`, pathes)
            pathes.map(path => {
                this.state.savedPathes[path] = true
            })
            this.setState({
                savedPathes: this.state.savedPathes
            })
        })
    }
    fetchFileContent(pathItem) {
        const path = pathItem.key
        this.setState({
            selectFilePath: path
        })
        ipcRenderer.send(`${ID}-fetchFileContent`, path)
    }
    fetchList() {
        ipcRenderer.send(`${ID}-fetch`)
    }
    register() {
        ipcRenderer.on(`${ID}-fetch-cb`, (event, pathList) => {
            this.setState({
                savedPathes: pathList
            })
        })
        ipcRenderer.on(`${ID}-fetchFileContent-cb`, (event, fileContent) => {
            this.setState({
                fileContent
            })
        })
    }
    saveFileChange() {
        ipcRenderer.send(`${ID}-changeFileContent`, this.state.selectFilePath, this.state.fileContent)
    }
    removeFile() {
        const path = this.state.selectFilePath
        let savedPathes = this.state.savedPathes
        savedPathes[path] = false
        this.setState({
            fileContent: '',
            savedPathes
        })
        ipcRenderer.send(`${ID}-removeFile`, path)
    }
    render() {
        const genSavedPathesList = (pathes) => {
            let pathList = []
            for(let path in pathes) {
                if(pathes[path] === true) {
                    pathList.push(
                        <Menu.Item key={ path } title={ path }>
                            { basename(path) }
                        </Menu.Item>
                    )
                }
            }
            return pathList
        }
        return (
            <div className='con-config-manage'>
                <Row gutter={16}>
                    <Col span={4}>
                        <Input.Search onSearch={ value => console.log(value) } />
                        <Menu theme='dark' onSelect={ (pathItem) => this.fetchFileContent(pathItem) }>
                            { genSavedPathesList(this.state.savedPathes) }
                        </Menu>
                        <Button type='primary' onClick={ () => this.callDialog() }>
                            新增
                        </Button>
                        {
                            this.state.fileContent
                            ? <Button onClick={ () => this.removeFile() }>
                                移除
                              </Button>
                            : ''
                        }
                        {
                            this.state.fileContent
                            ? <Button type='primary' onClick={ () => this.saveFileChange() }>
                                保存
                              </Button>
                            : ''
                        }
                    </Col>
                    <Col span={20}>
                        <Input.TextArea rows="45" value={ this.state.fileContent } onChange={ (e) => { this.setState({ fileContent: e.target.value })} }/>
                    </Col>
                </Row>
            </div>
        )
    }
}
