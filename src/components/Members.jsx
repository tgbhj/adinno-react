import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Form, Modal, Button, Tooltip, notification, Select } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import fly from 'flyio'
import qs from 'querystring'
import { MyContext } from './TableData'

function Members() {
    const [visible, setVisible] = useState(false)
    const data = useContext(MyContext)

    const onFinish = async values => {
        const a = data.members
        const b = values.members

        //a与b不重复的部分
        function inANotInB(a, b) {
            const obj = new Object()
            for (let i = 0; i < a.length; i++) {
                obj[a[i]] = 1
            }
            for (let i = 0; i < b.length; i++) {
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
            for (let i = 0; i < b.length; i++) {
                obj[b[i]] = 1
            }
            for (let i = 0; i < a.length; i++) {
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
            .post('/tasks/members/' + data.id + '/', qs.stringify({
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
            }).catch(() => {
                notification.error({
                    message: 'Error',
                    description: 'Server Error',
                    duration: 2
                })
            })
    }


    return <Fragment>
        <Tooltip placement="bottom" title="修改参与人" arrowPointAtCenter>
            <Button onClick={() => setVisible(true)} type="primary" icon={<PlusCircleOutlined />} />
        </Tooltip>
        <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
            <Row type="flex" justify="center" align="middle">
                <Col xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Form onFinish={onFinish}>
                        <Form.Item name='members'>
                            <Select allowClear mode="multiple" placeholder="项目参与人" value={data.members}>
                                {
                                    data.users.map(item => {
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