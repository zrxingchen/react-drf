import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/style.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Header from './components/search_header'
import Footer from './components/search_footer'
import Content from './components/search_content'
import { Image } from 'antd';
import home from './images/assets/navigation_home.png'
import category from './images/assets/navigation_classify.png'
import community from './images/assets/navigation_society.png'
import earnings from './images/assets/navigation_earnings.png'
import my from './images/assets/navigation_my.png'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className='tab-bar'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/header">
                                    <span>
                                        <Image src={home}/>
                                    </span>
                                    首页</Link>
                                </li>
                                <li>
                                    <Link to="/content">
                                    <span>
                                        <Image src={category}/>
                                    </span>
                                        分类</Link>
                                </li>
                                <li>
                                    <Link to="/footer">
                                    <span>
                                        <Image src={community}/>
                                    </span>   
                                        社区</Link>
                                </li>
                                <li>
                                    <Link to="/footer">
                                    <span>
                                        <Image src={earnings}/>
                                    </span>   
                                    收益</Link>
                                </li>
                                <li>
                                    <Link to="/footer">
                                    <span>
                                        <Image  src={my}/>
                                    </span>   
                                    我的</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <Switch>
                        <Route path="/content">
                            <Content />
                        </Route>
                        <Route path="/footer">
                            <Footer />
                        </Route>
                        <Route path="/header">
                            <Header />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(
    <Index></Index>,
    document.getElementById('root')
)
