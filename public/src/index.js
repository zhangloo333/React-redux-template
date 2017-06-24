import './scss/main.scss'
// import indexTpl from './templates/index.html'
import React from 'react'
import ReactDom from 'react-dom'
import MyContainer from './components/container'

let app = document.createElement('div')
document.body.appendChild(app)

ReactDom.render(<MyContainer />, app)
