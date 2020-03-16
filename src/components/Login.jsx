import React, { useEffect } from 'react'
import { Row, Col, Card, Form, Input, Button, notification } from 'antd'
import fly from 'flyio'
import qs from 'querystring'
import Cookies from 'js-cookie'
import Password from './Password'

function Login() {
    const onFinish = async values => {
        await fly
            .post('/users/login/', qs.stringify({
                username: values.username,
                password: values.password
            }))
            .then(res => {
                if (res.data.status === 1) {
                    Cookies.set('name', 'adinno', { expires: new Date(res.data.expiry), domain: document.domain })
                    window.location.reload()
                } else if (res.data.status === 2) {
                    notification.error({
                        message: '已登录',
                        description: '',
                        duration: 2
                    })
                } else {
                    notification.error({
                        message: unescape(res.data.reason.replace(/\\u/g, '%u')),
                        description: res.data.reason,
                        duration: 2
                    })
                }
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    useEffect(() => {
        if (Cookies.get('name') != undefined) {
            window.location.reload()
        }
    }, [])

    return <Row type="flex" justify="center" align="middle" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <Card bodyStyle={{ padding: 0 }} style={{ boxShadow: '0 0 10px #888888' }} bordered={false}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onFinish={onFinish}>
                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <p style={{ marginTop: 20, fontSize: 20, fontWeight: 600 }}>登 录</p>
                            </div>
                            <Form.Item name='username' rules={[{
                                required: true, message: '用户名不能为空'
                            }]}>
                                <Input allowClear placeholder="用户名" />
                            </Form.Item>
                            <Form.Item name='password' rules={[{
                                required: true, whitespace: true, message: '密码不能为空'
                            }]}>
                                <Input allowClear autoComplete="true" type="password" placeholder="密码" />
                            </Form.Item>
                            <Form.Item>
                                <Password />
                                <Button type="primary" block htmlType="submit">登 录</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row >
}

export default Login