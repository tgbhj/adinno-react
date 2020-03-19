import React, { Fragment, useState, useEffect } from 'react'
import { Button, Table, notification, Popconfirm, BackTop, Tooltip, Divider, Row, Col, Tag, Timeline, Input, Typography } from 'antd'
import { LogoutOutlined, SearchOutlined, DeleteOutlined } from '@ant-design/icons'
import fly from 'flyio'
import Add from './Add'
import Edit from './Edit'
import Progress from './Progress'
import Members from './Members'
import moment from 'moment'
import Cookies from 'js-cookie'
import { MyContext } from '../context-manager'
import ErrorBoundary from './ErrorBoundary'

function TableData() {
    const [dataSource, setDataSource] = useState([])
    const [users, setUsers] = useState([])
    const [progress, setPregress] = useState([])
    const [filters, setFilters] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            if (Cookies.get('name') === undefined) {
                notification.error({
                    message: 'Cookie过期，重新登录',
                    description: '',
                    duration: 1
                })
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                await getData()
                await getUsers()
            }
        }
        fetchData()
    }, [])

    const getData = async () => {
        await fly
            .get('/tasks/all/')
            .then(res => {
                setDataSource(res.data.tasks)
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    const getUsers = async () => {
        await fly
            .get('/users/all')
            .then(res => {
                for (let key in res.data.users) {
                    res.data.users[key] = { ...res.data.users[key] }
                }
                setUsers(res.data.users)
                let fil = []
                for (let key in res.data.users) {
                    fil.push({ text: res.data.users[key][1], value: res.data.users[key][1] })
                }
                setFilters(fil)
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    const handleSearch = async (selectedKeys, confirm) => {
        await confirm()
        await setSearchText(selectedKeys[0])
    }

    const handleReset = async clearFilters => {
        await clearFilters()
        await setSearchText('')
    }

    const handleDelete = async row => {
        await fly
            .post('/tasks/delete/' + row.id + '/')
            .then(res => {
                if (res.data.status === 1) {
                    notification.success({
                        message: '删除成功',
                        description: '',
                        duration: 2
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    notification.error({
                        message: '删除失败',
                        description: res.data.reason,
                        duration: 2
                    })
                }
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    const handleExpand = async (expanded, record) => {
        await fly
            .get('/tasks/progresses/' + record.id + '/')
            .then(res => {
                setPregress(res.data.progress);
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    const handleClick = async () => {
        await fly
            .get('/users/logout/')
            .then(() => {
                Cookies.remove('name', { path: '/', domain: document.domain })
                window.location.reload()
            })
            .catch(err => {
                notification.error({
                    message: 'Error',
                    description: err,
                    duration: 2
                })
            })
    }

    return <Fragment>
        <ErrorBoundary>
            <Table
                dataSource={dataSource}
                rowKey="id"
                pagination={{ simple: true, total: dataSource.length, size: 'small', pageSize: 20 }}
                expandedRowRender={() =>
                    <ErrorBoundary>
                        <Timeline>
                            {
                                progress.map(item => {
                                    return <Timeline.Item key={item.last_update}>{item.progress}--->{item.submitter}{moment(item.last_update).format('YYYY-MM-DD HH:mm:ss')}</Timeline.Item>
                                })
                            }
                        </Timeline>
                    </ErrorBoundary>}
                title={() => <Fragment>
                    <MyContext.Provider value={{ users: users }}>
                        <ErrorBoundary>
                            <Add />
                        </ErrorBoundary>
                    </MyContext.Provider>
                    <Tooltip placement="bottom" title="登出" arrowPointAtCenter>
                        <div style={{ float: 'right', marginRight: 15, marginBottom: 15 }}><Button type="danger" icon={<LogoutOutlined />} onClick={handleClick} /></div>
                    </Tooltip>
                </Fragment>}
                onExpand={handleExpand}
                scroll={{ scrollToFirstRowOnChange: true }}
            >
                <Table.Column title="项目名称" dataIndex="name" key="name" width='13%' filterDropdown={({
                    setSelectedKeys,
                    selectedKeys,
                    confirm,
                    clearFilters
                }) => (
                        <div style={{ padding: 8 }}>
                            <ErrorBoundary>
                                <Input
                                    ref={node => { setSearchInput(node) }}
                                    placeholder="项目搜索"
                                    value={selectedKeys[0]}
                                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                                    onPressEnter={() => handleSearch(selectedKeys, confirm)}
                                    style={{ width: 188, marginBottom: 8, display: "block" }}
                                />
                            </ErrorBoundary>
                            <Button type="primary" onClick={() => handleSearch(selectedKeys, confirm)} size="small" style={{ width: 90, marginRight: 8 }}>搜索</Button>
                            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>重置</Button>
                        </div>
                    )}
                    filterIcon={() => (
                        <SearchOutlined />
                    )}
                    onFilter={(value, record) =>
                        record.name
                            .toString()
                            .toLowerCase()
                            .includes(value.toLowerCase())
                    } />
                <Table.Column title="项目负责人" dataIndex="manager" key="manager" width='10%' filters={filters} onFilter={(value, record) => record.manager.includes(value)} />
            )} />
            <Table.Column title="项目参与人" dataIndex="members" key="members" width='14%' render={(text, record) => (
                    <Fragment>
                        <Row>
                            <Col span={20}>
                                {
                                    record.members.map(item => {
                                        return <Col span={8} key={item} style={{ marginTop: 3, marginBottom: 3 }}><Tag>{item}</Tag></Col>
                                    })
                                }
                            </Col>
                            <Col span={2}>
                                <MyContext.Provider value={{ id: record.id, members: record.members, users: users }}>
                                    <ErrorBoundary>
                                        <Members />
                                    </ErrorBoundary>
                                </MyContext.Provider>
                            </Col>
                        </Row>
                    </Fragment>
                )} />
                <Table.Column title="项目进度" dataIndex="progress" key="progress" render={(text, record) => (
                    <Fragment>
                        <Row>
                            <Col span={22}>
                                <Typography.Paragraph ellipsis={{ rows: 1, expandable: true }} >
                                    {record.progress}
                                </Typography.Paragraph>
                            </Col>
                            <Col span={2}>
                                <MyContext.Provider value={{ id: record.id }}>
                                    <ErrorBoundary>
                                        <Progress />
                                    </ErrorBoundary>
                                </MyContext.Provider>
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
                    return dataSource.length >= 1 ? (
                        <Fragment>
                            <MyContext.Provider value={{ users: users, id: record.id }}>
                                <ErrorBoundary>
                                    <Edit />
                                </ErrorBoundary>
                            </MyContext.Provider>
                            <Divider type="vertical" />
                            <Popconfirm title="确认删除" cancelText='取消' okText='确定' onConfirm={() => handleDelete(record)}>
                                <Tooltip placement="bottom" title="删除项目" arrowPointAtCenter>
                                    <Button type="danger" icon={<DeleteOutlined />} />
                                </Tooltip>
                            </Popconfirm>
                        </Fragment>
                    ) : null
                }} />
            </Table>
        </ErrorBoundary>
        <BackTop />
    </Fragment>
}

export default TableData