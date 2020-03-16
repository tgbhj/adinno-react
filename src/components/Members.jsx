import React, { Fragment, useState } from 'react'
import { Row, Col, Form, Modal, Button, Tooltip, notification, Select } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import fly from 'flyio'
import qs from 'querystring'

function Members(props = {}) {
    const [visible, setVisible] = useState(false)

    const onFinish = async values => {
        const a = props.members
        const b = values.members

        //a与b不重复的部分
        function inANotInB(a, b) {
            const obj = new Object()
            for (let i = 0, len = a.length; i < len; i++) {
                obj[a[i]] = 1
            }
            for (let i = 0, len = b.length; i < len; i++) {
                if (obj.hasOwnProperty(b[i])) {
                    obj[b[i]] = undefined
                }
            }
            const arr = new Array()
            let i = 0
            for (let per in obj) {
                if (obj[per]) {
                    arr[i++] = per
                }
            }
            return arr
        }

        //b与a不重复的部分
        function inBNotInA(a, b) {
            const obj = new Object()
            for (let i = 0, len = b.length; i < len; i++) {
                obj[b[i]] = 1
            }
            for (let i = 0, len = a.length; i < len; i++) {
                if (obj.hasOwnProperty(a[i])) {
                    obj[a[i]] = undefined
                }
            }
            const arr = new Array()
            let i = 0
            for (let per in obj) {
                if (obj[per]) {
                    arr[i++] = per
                }
            }
            return arr
        }

        var del = inANotInB(a, b)
        var add = inBNotInA(a, b)

        await fly
            .post('/tasks/members/' + props.id + '/', qs.stringify({
                add: add,
                del: del
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
        <Tooltip placement="bottom" title="修改参与人" arrowPointAtCenter>
            <Button disabled={visible} onClick={() => setVisible(true)} type="primary" icon={<PlusCircleOutlined />} />
        </Tooltip>
        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item name='members'>
                            <Select allowClear mode="multiple" placeholder="项目参与人" value={props.members}>
                                {
                                    props.users.map(item => {
                                        return <Select.Option key={item[1]}>{item[1]}</Select.Option>
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

export default Members