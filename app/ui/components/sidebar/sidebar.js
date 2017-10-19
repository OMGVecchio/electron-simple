'use strict'

import { Link } from 'react-router'

import { Avatar, Button } from 'antd'

import './sidebar.styl'

export default class Sidebar extends Component {
    back() {
        window.history.go(-1)
    }
    render() {
        return (
            <div className='r-sidebar'>
                <Avatar src="http://t5.zbjimg.com/r/page/zbjimg.gif" size="large" />
                <ul className='menu-item'>
                    <li>
                        <Button ghost>
                            <Link to='/'>首页</Link>
                        </Button>
                    </li>
                    <li>
                        <Button ghost>
                            <Link to='/configManage'>配置管理</Link>
                        </Button>
                    </li>
                    <li>
                        <Button ghost>
                            <Link to='/weather'>天气</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        )
    }
}
