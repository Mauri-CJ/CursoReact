import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import HooksApp from './HooksApp'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layaout'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Layout/>
)

