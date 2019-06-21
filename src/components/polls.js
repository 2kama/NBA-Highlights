import React, { Component } from 'react'


const URL_TEAM = "http://localhost:3001/teams"


class Polls extends Component {

    constructor(props) {
        super(props)

        this.state = {
            polls : []
        }
    }



    fetchPolls () {

        const URL = `${URL_TEAM}?poll=true&_sort=count&_order=desc`

        fetch(URL, {method : "GET"})
        .then(res => res.json())
        .then(json => {
            this.setState({
                polls:json
            })
        })

    }



    addCount (count, id) {

        fetch(`${URL_TEAM}/${id}`, {
            method : "PATCH",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({count : count + 1})
        })
        .then(() => {
            this.fetchPolls()
        })

    }



    generatePolls () {
        const position = ['1ST', '2ND', '3RD']
        return this.state.polls.map((item, index) => {
            return(
                <div key={item.id} className="pollItem" onClick={() => this.addCount(item.count, item.id)}>
                    <img src={`./images/teams/${item.logo}`} alt={item.name}/>
                    <h6>{position[index]}</h6>
                    <p>{item.count}</p>
                    <span>{item.name}</span>
                </div>
            )
        })

    }

    


    componentDidMount() {
        this.fetchPolls()
    }



    render () {
        return(
            <div className="pollSection">
                <h3>Who will win the championship?</h3>
                <div className="pollHolder">
                    {this.generatePolls()}
                </div>
                
            </div>
        )
    }



}

export default Polls