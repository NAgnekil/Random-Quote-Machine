import React from 'react'
import './index.css'
import QuoteMachine from './App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<QuoteMachine />)
