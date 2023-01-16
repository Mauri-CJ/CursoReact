import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEfect/SimpleForm'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import HooksApp from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FormWithCustomHook/>
)