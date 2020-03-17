import React, { Fragment, useState } from 'react'
import { Row, Col, Form, Input, Button, notification, Modal } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

function Password() {
    const [visible, setVisible] = useState(false)

    const onFinish = async values => {
        await fly
            .post('/users/password/', qs.stringify({
                username: values.username,
                password: values.password,
                new: values.new
            }))
            .then(res => {
                if (res.data.status === 1) {
                    notification.success({
                        message: '修改成功',
                        description: '',
                        duration: 2
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    notification.error({
                        message: '修改失败',
                        description: res.data.reason,
                        duration: 2
                    })
                }
            }).catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    return <Fragment>
        <a onClick={() => setVisible(true)} type="primary">修改密码</a>
        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <div style={{ margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ marginTop: 20, fontSize: 20, fontWeight: 600 }}>修改密码</p>
                        </div>
                        <Form.Item name='username' rules={[{
                            required: true, message: '用户名不能为空'
                        }]}>
                            <Input placeholder="用户名" allowClear />
                        </Form.Item>
                        <Form.Item name='password' rules={[{
                            required: true, message: '原密码不能为空'
                        }]}>
                            <Input.Password autoComplete="true" placeholder="原密码" allowClear />
                        </Form.Item>
                        <Form.Item name='new' rules={[{
                            required: true, message: '新密码不能为空'
                        }]}>
                            <Input.Password autoComplete="true" placeholder="新密码" allowClear />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType="submit">提 交</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    </Fragment>
}

export default Password