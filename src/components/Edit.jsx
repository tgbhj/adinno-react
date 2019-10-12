import React, { Fragment } from 'react'
import { Row, Col, Form, Modal, Input, Button, Select, Tooltip, notification } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class EditForm extends React.Component {
    state = {
        visible: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fly
                    .post('/tasks/update/'+ this.props.id +'/', qs.stringify({
                        name: this.props.form.getFieldValue('name'),
                        manager: this.props.form.getFieldValue('manager')
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
            <Tooltip placement="bottom" title="修改项目" arrowPointAtCenter>
                <Button disabled={this.state.visible} onClick={() => this.setState({ visible: true })} type="primary" icon='edit' />
            </Tooltip>
            <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {this.props.form.getFieldDecorator('name')(
                                    <Input placeholder="项目名称" allowClear/>
                                )}
                            </FormItem>
                            <FormItem>
                                {this.props.form.getFieldDecorator('manager')(
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

const Edit = Form.create()(EditForm);

export default Edit