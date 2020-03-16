import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import index from '../views/index'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import NotFound from '../components/NotFound'

const Routers = () => (
    <ConfigProvider locale={zhCN}>
        <Router>
            <Switch>
                <Route exact path="/" component={index} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </ConfigProvider>
);

export default Routers