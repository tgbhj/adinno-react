import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Form, Modal, Input, Button, Select, Tooltip, notification } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import fly from 'flyio'
import qs from 'querystring'
import { MyContext } from './TableData'

function Edit() {
    const [visible, setVisible] = useState(false)
    const data = useContext(MyContext)

    const onFinish = async values => {
        await fly
            .post('/tasks/update/' + data.id + '/', qs.stringify({
                name: values.name,
                manager: values.manager
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
            }).catch(() => {
                notification.error({
                    message: 'Error',
                    description: 'Server Error',
                    duration: 2
                })
            })
    }

    return <Fragment>
        <Tooltip placement="bottom" title="修改项目" arrowPointAtCenter>
            <Button onClick={() => setVisible(true)} type="primary" icon={<EditOutlined />} />
        </Tooltip>
        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item name='name'>
                            <Input placeholder="项目名称" allowClear />
                        </Form.Item>
                        <Form.Item name='manager'>
                            <Select placeholder="项目负责人" allowClear>
                                {
                                    data.users.map(item => {
                                        return <Select.Option key={item[0]}>{item[1]}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType="submit">修 改</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    </Fragment>
}

export default Edit