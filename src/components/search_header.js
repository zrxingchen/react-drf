import { Col, Row } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import xh from '../images/search/xh.png'
import  wifi from '../images/search/wifi.png'
import dl from '../images/search/dl.png'


import '../css/style.css'
export default class Header extends React.Component {
    render() {
        return (
            <div className='tab-search'>
                <header>
                    <Row gutter={8}>
                        <Col className="gutter-row" span={8}>
                            <div >
                                <span>
                                    <img src={xh} width={15}/>   
                                    &nbsp;
                                    中国移动 
                                    <img src={wifi} width={15}/>  
                                </span>

                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div >
                            <span>
                                下午9：11
                            </span>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div >
                                <span>
                                100%    <img src={dl} width={15}/>
                                </span>
                            </div>
                        </Col>
                        
                    </Row>
                </header>
            </div>
        )
    }
}