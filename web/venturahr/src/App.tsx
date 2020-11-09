/* Arquivo de configuração da aplicação de entrada */

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import ToastContainer from './components/ToastContainer'
import { ToastProvider } from './hooks/toast'
import Routes from './routes'
import AppProvider from './hooks'

const App: React.FC = () => (
    <>
        <AppProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppProvider>
        <GlobalStyle />
    </>
)

export default App
