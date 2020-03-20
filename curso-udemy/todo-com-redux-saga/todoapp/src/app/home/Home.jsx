import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to='/todo'>Todo</Link></li>
            </ul>
        </div>
    );
  }
}

export default Index