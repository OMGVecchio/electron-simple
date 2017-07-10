'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Canvas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canvas: null,
            ctx: null,
            video: null
        }
        this.capture = this.capture.bind(this)
    }
    componentDidMount() {
        this.state.canvas = document.querySelector('#canvas')
        this.state.video = document.querySelector('#video')
        // this.setWenGl()
        this.setCanvas()
        this.setCamera()
    }
    setCanvas() {
        let ctx = this.state.ctx = this.state.canvas.getContext('2d')
        ctx.fillStyle = '#aaddff'
        ctx.fillRect(0, 0, 600, 400)
    }
    setWenGl() {
        let webGl = this.state.ctx = this.state.canvas.getContext('webgl')
        // 设置清除颜色为黑色，不透明
        webGl.clearColor(0.0, 0.0, 0.0, 1.0)
        // 开启“深度测试”, Z-缓存
        webGl.enable(webGl.DEPTH_TEST)
        // 设置深度测试，近的物体遮挡远的物体
        webGl.depthFunc(webGl.LEQUAL)
        // 清除颜色和深度缓存
        webGl.clear(webGl.COLOR_BUFFER_BIT|webGl.DEPTH_BUFFER_BIT)
        webGl.viewport(0, 0, this.state.canvas.width, this.state.canvas.height)
        console.log(webGl)
    }
    setCamera() {
        let video = {
            video: true
        }
        navigator
            .webkitGetUserMedia(video, stream => {
                this.state.video.src = window.webkitURL.createObjectURL(stream)
                this.state.video.play()
            }, (error) => {
                console.log(error)
            })
    }
    capture() {
        this.state.ctx.drawImage(this.state.video, 0, 0, 600, 400)
        window.ss = this.state.canvas.toDataURL()
    }
    render() {
        return (
            <div>
                <canvas id='canvas' width='600' height='400'>

                </canvas>
                <button onClick={this.capture}>捕获</button>
                <video id="video">

                </video>
            </div>
        )
    }
}
