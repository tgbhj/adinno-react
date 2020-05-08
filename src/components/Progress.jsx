import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Form, Modal, Input, Button, Tooltip, notification } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import fly from 'flyio'
import qs from 'querystring'
import { MyContext } from './TableData'

function Progress() {
    const [visible, setVisible] = useState(false)
    const data = useContext(MyContext)

    const onFinish = async values => {
        await fly
            .post('/tasks/progress/' + data.id + '/', qs.stringify({
                progress: values.progress
            }))
            .then(res => {
                if (res.data.status === 1) {
                    notification.success({
                        message: '更新成功',
                        description: '',
                        duration: 2
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    notification.error({
                        message: '更新失败',
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
        <Tooltip placement="bottom" title="更新进度" arrowPointAtCenter>
            <Button onClick={() => setVisible(true)} type="primary" icon={<PlusCircleOutlined />} />
        </Tooltip>
        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item name='progress' rules={[{
                            required: true, message: '项目进度不能为空'
                        }]}>
                            <Input.TextArea autoSize placeholder="项目进度" allowClear />
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

export default Progress