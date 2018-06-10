'use strict'

const { ipcRenderer, remote } = electron
import { Modal } from 'antd'

export default class AuthInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            pwd: ''
        }
    }
    register() {
        ipcRenderer.on('common-authcheck', (event, data) => {
            this.setState({
                visible: true
            })
        })
    }
    componentDidMount() {
        this.register()
    }
    handleOk(e) {
        this.setState({
            visible: false
        })
    }
    handleCancel(e) {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <Modal
                title="请输入 ROOT 密码"
                visible={ this.state.visible }
                onOk={ e => this.handleOk() }
                onCancel={ e => this.handleCancel() } >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        )
    }
}
