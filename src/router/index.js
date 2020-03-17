import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import index from '../views/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

const Routers = () => (
    <ConfigProvider locale={zhCN}>
        <Router>
            <Switch>
                <Route exact path="/" component={index} />
            </Switch>
        </Router>
    </ConfigProvider>
);

export default Routers