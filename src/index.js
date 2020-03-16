import React from 'react'
import { render } from 'react-dom'
import Routers from './router/index'
import * as serviceWorker from './serviceWorker'

render(
    <Routers />,
    document.getElementById('root')
)

// serviceWorker.unregister()
serviceWorker.register()