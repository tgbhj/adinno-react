import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Form, Modal, Input, Button, Select, Tooltip, notification } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import fly from 'flyio'
import qs from 'querystring'
import { MyContext } from './TableData'

function Add() {
    const [visible, setVisble] = useState(false)
    const data = useContext(MyContext)

    const onFinish = async values => {
        await fly
            .post('/tasks/add/', qs.stringify({
                name: values.name,
                manager: values.manager,
                members: values.members,
                progress: values.progress
            }))
            .then(res => {
                if (res.data.status === 1) {
                    notification.success({
                        message: '添加成功',
                        description: '',
                        duration: 2
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    notification.error({
                        message: '添加失败',
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
        <Tooltip placement="bottom" title="添加项目" arrowPointAtCenter>
            <div style={{ float: "left", marginLeft: 15, marginBottom: 15 }}>
                <Button onClick={() => setVisble(true)} type="primary" icon={<PlusOutlined />} />
            </div>
        </Tooltip>
        <Modal visible={visible} footer={null} onCancel={() => setVisble(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item name='name' rules={[{
                            required: true, message: '项目名称不能为空'
                        }]}>
                            <Input placeholder="项目名称" allowClear />
                        </Form.Item>
                        <Form.Item name='manager' rules={[{
                            required: true, message: '项目负责人不能为空'
                        }]}>
                            <Select placeholder="项目负责人" allowClear>
                                {
                                    data.users.map(item => {
                                        return <Select.Option key={item[0]}>{item[1]}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name='members' rules={[{
                            required: true, message: '项目参与人不能为空'
                        }]}>
                            <Select mode="multiple" placeholder="项目参与人" allowClear>
                                {
                                    data.users.map(item => {
                                        return <Select.Option key={item[0]}>{item[1]}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name='progress' rules={[{
                            required: true, message: '项目进度不能为空'
                        }]}>
                            <Input.TextArea autoSize placeholder="项目进度" allowClear />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType="submit">保 存</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    </Fragment>
}

export default Add