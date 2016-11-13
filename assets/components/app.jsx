import React from 'react';

import Hello from './hello.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Link to='/world'>World</Link>
                <Hello/>
            </div>
        )
    }
}