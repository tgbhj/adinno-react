import React, { Fragment } from 'react'
import { Row, Col, Form, Modal, Input, Button, Select, Tooltip, notification } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddForm extends React.Component {
    state = {
        visible: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fly
                    .post('/tasks/add/', qs.stringify({
                        name: this.props.form.getFieldValue('name'),
                        manager: this.props.form.getFieldValue('manager'),
                        members: this.props.form.getFieldValue('members'),
                        progress: this.props.form.getFieldValue('progress')
                    }))
                    .then(res => {
                        if (res.data.status === 1) {
                            window.location.reload()
                        } else {
                            notification.error({
                                message: '添加失败',
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
            <Tooltip placement="bottom" title="添加项目" arrowPointAtCenter>
                <div style={{float: "left", marginLeft: 15}}><Button disabled={this.state.visible} onClick={() => this.setState({ visible: true })} type="primary" icon='plus' /></div>
            </Tooltip>
            <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {this.props.form.getFieldDecorator('name', {
                                    rules: [{
                                        required: true, message: '项目名称不能为空'
                                    }]
                                })(
                                    <Input placeholder="项目名称" allowClear/>
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('manager', {
                                    rules: [{
                                        required: true, message: '项目负责人不能为空'
                                    }]
                                })(
                                    <Select placeholder="项目负责人" allowClear>
                                        {
                                            this.props.users.map(item => {
                                                return <Select.Option key={item[0]}>{item[1]}</Select.Option>
                                            })
                                        }
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('members', {
                                    rules: [{
                                        required: true, message: '项目参与人不能为空'
                                    }]
                                })(
                                    <Select mode="multiple" placeholder="项目参与人" allowClear>
                                        {
                                            this.props.users.map(item => {
                                                return <Select.Option key={item[0]}>{item[1]}</Select.Option>
                                            })
                                        }
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('progress', {
                                    rules: [{
                                        required: true, message: '项目进度不能为空'
                                    }]
                                })(
                                    <Input.TextArea autosize placeholder="项目进度" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" block htmlType="submit"
                                    disabled={hasErrors(this.props.form.getFieldsError())}>保 存</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </Fragment>
    }
}

const Add = Form.create()(AddForm);

export default Add