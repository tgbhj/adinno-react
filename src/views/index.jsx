import React from 'react'
import TableData from '../components/TableData'
import Login from '../components/Login'
import Cookies from 'js-cookie'

function index() {
    let cook

    if (Cookies.get('name') === undefined) {
        cook = false
    } else {
        cook = true
    }

    return cook ? (<TableData />) : (<Login />)
}

export default index