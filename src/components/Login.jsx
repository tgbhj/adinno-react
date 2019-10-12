import React from 'react'
import { Row, Col, Card, Form, Input, Icon, Button, notification } from 'antd'
import fly from 'flyio'
import qs from 'querystring'
import Cookies from 'js-cookie'
import Password from './Password'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fly
                    .post('/users/login/', qs.stringify({
                        username: this.props.form.getFieldValue('username'),
                        password: this.props.form.getFieldValue('password')
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
                        console.log(err)
                    })
            }
        })
    };

    componentDidMount() {
        if (Cookies.get('name') != undefined) {
            window.location.reload()
        }
    }

    render() {
        return <Row type="flex" justify="center" align="middle" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }}>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                <Card bodyStyle={{ padding: 0 }} style={{ boxShadow: '0 0 10px #888888' }} bordered={false}>
                    <Row type="flex" justify="center" align="middle">
                        <Col xs={22} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form onSubmit={this.handleSubmit}>
                                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                    <p style={{ marginTop: 20, fontSize: 20, fontWeight: 600 }}>登 录</p>
                                </div>
                                <FormItem>
                                    {this.props.form.getFieldDecorator('username', {
                                        rules: [{
                                            required: true, message: '用户名不能为空'
                                        }]
                                    })(
                                        <Input allowClear prefix={<Icon type="user" />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {this.props.form.getFieldDecorator('password', {
                                        rules: [{
                                            required: true, whitespace: true, message: '密码不能为空'
                                        }]
                                    })(
                                        <Input allowClear autoComplete="true" type="password" prefix={<Icon type="lock" />} placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Password />
                                    <Button type="primary" block htmlType="submit" disabled={hasErrors(this.props.form.getFieldsError())}>登 录</Button>
                                </FormItem>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    }
}

const Login = Form.create()(SignForm);

export default Login