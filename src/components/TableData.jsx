import React, { Fragment } from 'react'
import { Button, Table, notification, Popconfirm, BackTop, Tooltip, Divider, Row, Col, Tag, Timeline, Input, Icon } from 'antd'
import fly from 'flyio'
import Add from './Add'
import Edit from './Edit'
import Progress from './Progress'
import Members from './Members'
import moment from 'moment'
import Cookies from 'js-cookie'

class TableData extends React.Component {
    state = {
        dataSource: [],
        users: [],
        progress: [],
        filters: [],
        searchText: ""
    }

    async getData() {
        await fly
            .get('/tasks/all/')
            .then(res => {
                this.setState({ dataSource: res.data.tasks });
            })
            .catch(err => {
                console.log(err)
            })
    }

    async getUsers() {
        await fly
            .get('/users/all')
            .then(res => {
                for (let key in res.data.users) {
                    res.data.users[key] = { ...res.data.users[key] }
                }
                this.setState({ users: res.data.users });
            })
            .catch(err => {
                console.log(err)
            })
    }

    async componentDidMount() {
        if (Cookies.get('name') === undefined) {
            window.location.reload()
        } else {
            await this.getData()
            await this.getUsers()
            let filters = [];
            for (let key in this.state.users) {
                filters.push({ text: this.state.users[key][1], value: this.state.users[key][1] })
            }
            this.setState({ filters: filters })
        }
    }

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: "" });
    };

    handleDelete = row => {
        fly
            .post('/tasks/delete/' + row.id + '/')
            .then(res => {
                if (res.data.status === 1) {
                    window.location.reload()
                } else {
                    notification.error({
                        message: '删除失败',
                        description: res.data.reason,
                        duration: 2
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    handleExpand = (expanded, record) => {
        fly
            .get('/tasks/progresses/' + record.id + '/')
            .then(res => {
                this.setState({ progress: res.data.progress });
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClick = () => {
        fly
            .get('/users/logout/')
            .then(() => {
                Cookies.remove('name', { path: '/', domain: document.domain })
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return <Fragment>
            <Table
                dataSource={this.state.dataSource}
                rowKey="id"
                pagination={{ simple: true, total: this.state.dataSource.length, size: 'small', pageSize: 20 }}
                expandedRowRender={() =>
                    <Timeline>
                        {
                            this.state.progress.map(item => {
                                return <Timeline.Item key={item.last_update}>{item.progress}--->{item.submitter}{moment(item.last_update).format('YYYY-MM-DD HH:mm:ss')}</Timeline.Item>
                            })
                        }
                    </Timeline>}
                title={() => <Row>
                    <Add users={this.state.users} dataSource={this.state.dataSource} />
                    <Tooltip placement="bottom" title="登出" arrowPointAtCenter>
                        <div style={{ float: "right", marginRight: 15 }}><Button type="danger" icon='logout' onClick={this.handleClick} /></div>
                    </Tooltip>
                </Row>}
                onExpand={this.handleExpand}
                // scroll={{ scrollToFirstRowOnChange: true }}
            >
                {/* <Column title="ID" dataIndex="id" key="id" width='8%' /> */}
                <Table.Column title="项目名称" dataIndex="name" key="name" width='13%' filterDropdown={({
                    setSelectedKeys,
                    selectedKeys,
                    confirm,
                    clearFilters
                }) => (
                        <div style={{ padding: 8 }}>
                            <Input
                                ref={node => { this.searchInput = node; }}
                                placeholder="项目搜索"
                                value={selectedKeys[0]}
                                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                                onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                                style={{ width: 188, marginBottom: 8, display: "block" }}
                            />
                            <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm)} icon="search" size="small" style={{ width: 90, marginRight: 8 }}>搜索</Button>
                            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>重置</Button>
                        </div>
                    )}
                    filterIcon={filtered => (
                        <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
                    )}
                    onFilter={(value, record) =>
                        record.name
                            .toString()
                            .toLowerCase()
                            .includes(value.toLowerCase())
                    }
                    onFilterDropdownVisibleChange={visible => {
                        if (visible) {
                            setTimeout(() => this.searchInput.select());
                        }
                    }} />
                <Table.Column title="项目负责人" dataIndex="manager" key="manager" width='10%' filters={this.state.filters} onFilter={(value, record) => record.manager.includes(value)} filterIcon={filtered => (
                    <Icon type="filter" style={{ color: filtered ? "#1890ff" : undefined }} />
                )} />
                <Table.Column title="项目参与人" dataIndex="members" key="members" width='14%' render={(text, record) => (
                    <Fragment>
                        <Row>
                            <Col span={22}>
                                {
                                    record.members.map(item => {
                                        return <Col span={10} key={item} style={{ marginTop: 3, marginBottom: 3 }}><Tag>{item}</Tag></Col>
                                    })
                                }
                            </Col>
                            <Col span={2}>
                                <Members id={record.id} members={record.members} users={this.state.users} />
                            </Col>
                        </Row>
                    </Fragment>
                )} />
                <Table.Column title="项目进度" dataIndex="progress" key="progress" render={(text, record) => (
                    <Fragment>
                        <Row>
                            <Col span={22}>
                                <div style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}>
                                    {record.progress}
                                </div>
                            </Col>
                            <Col span={2}>
                                <Progress id={record.id} />
                            </Col>
                        </Row>
                    </Fragment>
                )} />
                <Table.Column title="项目进度修改人/修改时间" dataIndex="submitter" key="submitter" width='15%' render={(text, record) => (
                    <Fragment>
                        <Row>
                            <Col>
                                {record.submitter}
                            </Col>
                            <Col>
                                {moment(record.last_update).format('YYYY-MM-DD HH:mm:ss')}
                            </Col>
                        </Row>
                    </Fragment>
                )} />
                <Table.Column title="操作" dataIndex="option" key="option" width='9%' render={(text, record) => {
                    return this.state.dataSource.length >= 1 ? (
                        <Fragment>
                            <Edit users={this.state.users} id={record.id} dataSource={this.state.dataSource} />
                            <Divider type="vertical" />
                            <Popconfirm title="确认删除" cancelText='取消' okText='确定' onConfirm={() => this.handleDelete(record)}>
                                <Tooltip placement="bottom" title="删除项目" arrowPointAtCenter>
                                    <Button type="danger" icon="delete" />
                                </Tooltip>
                            </Popconfirm>
                        </Fragment>
                    ) : null
                }} />
            </Table>
            <BackTop />
        </Fragment>
    }
}

export default TableData