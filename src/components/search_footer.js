import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'antd'

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>首页 &copy; 2020 -Dom </Col>
                        <Col span={2}></Col>
                    </Row>
                </footer>
            </div>
        )
    }
}