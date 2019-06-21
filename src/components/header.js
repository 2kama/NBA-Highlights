import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render() {

        return(
            <header>
                <Link to="/">
                    <span className="logo"></span>
                </Link>

                <span className="teamLink">
                    <Link to="/teams">
                        TEAMS
                    </Link>
                </span>
            </header>
        )

    }

}


export default Header