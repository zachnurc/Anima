import React, { Component } from 'react';
import Profile from './components/profile.js';
import './assets/css/App.css';

class App extends Component {

    render () {
        return (
            <div className="App">
                <div className="row">
                    <Profile />
                </div>
            </div>
        );
    }
}

export default App;
