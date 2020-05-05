import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <li className = "nav"></li>
                <li className= "nav"><NavLink to = '/homepage'></NavLink></li>
                <li className= "nav"><NavLink to = '/articles'></NavLink></li>
                <li className= "nav"><NavLink to = '/forum'></NavLink></li>
                <li className= "nav"><NavLink to = '/blog'></NavLink></li>
                <li className= "nav"><NavLink to = '/'></NavLink></li>
            </div>
        )
    }
}

export default NavBar
