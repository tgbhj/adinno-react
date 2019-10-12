import React, { Fragment } from 'react'
import { Row, Col, Form, Input, Button, notification, Modal } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class PassForm extends React.Component {
    state = {
        visible: false
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fly
                    .post('/users/password/', qs.stringify({
                        username: this.props.form.getFieldValue('username'),
                        password: this.props.form.getFieldValue('password'),
                        new: this.props.form.getFieldValue('new')
                    }))
                    .then(res => {
                        if (res.data.status === 1) {
                            window.location.reload()
                        } else {
                            notification.error({
                                message: '修改失败',
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
            <a onClick={() => this.setState({ visible: true })} type="primary">修改密码</a>
            <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleEdit}>
                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <p style={{ marginTop: 20, fontSize: 20, fontWeight: 600 }}>修改密码</p>
                            </div>
                            <FormItem>
                                {this.props.form.getFieldDecorator('username', {
                                    rules: [{
                                        required: true, message: '用户名不能为空'
                                    }]
                                })(
                                    <Input placeholder="用户名" allowClear />
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '原密码不能为空'
                                    }]
                                })(
                                    <Input type='password' autoComplete="true" placeholder="原密码" allowClear />
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('new', {
                                    rules: [{
                                        required: true, message: '新密码不能为空'
                                    }]
                                })(
                                    <Input type='password' autoComplete="true" placeholder="新密码" allowClear />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" block htmlType="submit"
                                    disabled={hasErrors(this.props.form.getFieldsError())}>提 交</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </Fragment>
    }
}

const Password = Form.create()(PassForm);

export default Password