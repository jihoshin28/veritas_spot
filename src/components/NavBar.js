import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className = "navbar">
                <ul>
                    <div>
                    <li className= "nav"><NavLink to='/homepage'>Home</NavLink></li>
                    <li className= "nav"><NavLink to='/articles'>Articles</NavLink></li>
                    <li className= "nav"><NavLink to='/forum'>Forum</NavLink></li>
                    <li className= "nav"><NavLink to='/blog'>Blog</NavLink></li>
                    <li className= "nav"><NavLink to='/about'>About</NavLink></li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default NavBar
