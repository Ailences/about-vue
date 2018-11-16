import $ from 'jquery'

import './css/index.css'

import './css/test.less'

import './css/demo.scss'

$(function () {
    $('ul>li:odd').css('background-color', 'lightgreen')
    $('ul>li:even').css('background-color', 'cyan')
})