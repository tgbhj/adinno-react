import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import index from '../views/index'

const Routers = () =>
    <ConfigProvider locale={zhCN}>
        <Router>
            <Switch>
                <Route exact path="/" component={index} />
            </Switch>
        </Router>
    </ConfigProvider>


export default Routers