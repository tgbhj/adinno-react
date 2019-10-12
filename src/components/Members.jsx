import React, { Fragment } from 'react'
import { Row, Col, Form, Modal, Button, Tooltip, notification, Select } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MembersForm extends React.Component {
    state = {
        visible: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const a = this.props.members;
                const b = this.props.form.getFieldValue('members');

                //a与b不重复的部分
                function inANotInB(a, b) {
                    const obj = new Object();
                    for (let i = 0, len = a.length; i < len; i++) {
                        obj[a[i]] = 1;
                    }
                    for (let i = 0, len = b.length; i < len; i++) {
                        if (obj.hasOwnProperty(b[i])) {
                            obj[b[i]] = undefined;
                        }
                    }
                    const arr = new Array();
                    let i = 0;
                    for (var per in obj) {
                        if (obj[per]) {
                            arr[i++] = per;
                        }
                    }
                    return arr;
                }

                //b与a不重复的部分
                function inBNotInA(a, b) {
                    const obj = new Object();
                    for (let i = 0, len = b.length; i < len; i++) {
                        obj[b[i]] = 1;
                    }
                    for (let i = 0, len = a.length; i < len; i++) {
                        if (obj.hasOwnProperty(a[i])) {
                            obj[a[i]] = undefined;
                        }
                    }
                    const arr = new Array();
                    let i = 0;
                    for (let per in obj) {
                        if (obj[per]) {
                            arr[i++] = per;
                        }
                    }
                    return arr;
                }

                var del = inANotInB(a, b);
                var add = inBNotInA(a, b);

                fly
                    .post('/tasks/members/' + this.props.id + '/', qs.stringify({
                        add: add,
                        del: del
                    }))
                    .then(res => {
                        if (res.data.status === 1) {
                            window.location.reload()
                        } else {
                            notification.error({
                                message: '进度更新失败',
                                description: res.data.reason,
                                duration: 2
                            })
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
    };

    render() {
        return <Fragment>
            <Tooltip placement="bottom" title="修改参与人" arrowPointAtCenter>
                <Button disabled={this.state.visible} onClick={() => this.setState({ visible: true })} type="primary" icon='plus-circle' />
            </Tooltip>
            <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {this.props.form.getFieldDecorator('members', {
                                    initialValue: this.props.members
                                })(
                                    <Select allowClear mode="multiple" placeholder="项目参与人">
                                        {
                                            this.props.users.map(item => {
                                                return <Select.Option key={item[1]}>{item[1]}</Select.Option>
                                            })
                                        }
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" block htmlType="submit"
                                    disabled={hasErrors(this.props.form.getFieldsError())}>修 改</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </Fragment>
    }
}

const Members = Form.create()(MembersForm);

export default Members