import React, { Component } from 'react'
import i18n from '@dhis2/d2-i18n'
import Headerbar from 'ui/widgets/HeaderBar'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Headerbar appName={i18n.t('Usage Analytics')} />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>{i18n.t('I am translated text')}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App
