import React, { Fragment } from 'react'
import { Row, Col, Form, Modal, Input, Button, Tooltip, notification } from 'antd'
import fly from 'flyio'
import qs from 'querystring'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ProgressForm extends React.Component {
    state = {
        visible: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                fly
                    .post('/tasks/progress/'+ this.props.id +'/', qs.stringify({
                        progress: this.props.form.getFieldValue('progress')
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
            <Tooltip placement="bottom" title="更新进度" arrowPointAtCenter>
                <Button disabled={this.state.visible} onClick={() => this.setState({ visible: true })} type="primary" icon='plus-circle' />
            </Tooltip>
            <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form onSubmit={this.handleSubmit}>
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
                                    disabled={hasErrors(this.props.form.getFieldsError())}>修 改</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </Fragment>
    }
}

const Progress = Form.create()(ProgressForm);

export default Progress