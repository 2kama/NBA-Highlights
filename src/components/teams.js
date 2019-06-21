import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const URL_HOME = 'http://localhost:3001/teams'


class Teams extends Component {

    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            filtered : [],
            keywords : ''
        }
    }


    fetchURL () {

        fetch(URL_HOME, {method:"GET"})
        .then(response => response.json())
        .then(json => {
            this.setState({
                teams : json,
                filtered : json
            })
        })

    }

    generateTeams () {
        return this.state.filtered.map((item) => {
            return (
                <div key={item.id} className="teamBox">
                    <Link to={`/team/${item.name}`}>
                        <img src={`./images/teams/${item.logo}`} alt="imag" />
                    </Link>
                </div>
            )
        })
    }

    componentDidMount() {
        this.fetchURL();
    }

    searchTeam = (event) => {
        let keyword = event.target.value;

        if(keyword !== "") {

            let item = this.state.teams.filter((items) => {
                return items.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })

            this.setState({
                filtered : item,
                keywords : keyword
            })

        }else {
            this.setState({
                filtered : this.state.teams,
                keywords : keyword
            })
        }
    }


    render() {

        return(
            <div className="teamCover">

                <div className="searchTeam">
                    <input onChange={(e) => this.searchTeam(e)} value={this.state.keywords} placeholder="Search for teams" />
                </div>

                <div className="teams">
                    {this.generateTeams()}
                </div>
                
            </div>
        )

    }

}


export default Teams