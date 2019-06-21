import React, { Component } from 'react'


import Featured from './featured'
import Subscribe from './subscribe'
import Blocks from './blocks'
import Polls from './polls'
const URL_HOME = 'http://localhost:3001/home'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: ''
        }
    }


    fetchURL () {

        fetch(URL_HOME, {method:"GET"})
        .then(response => response.json())
        .then(json => {
            this.setState({
                home : json
            })
        })

    }

    componentDidMount() {
        this.fetchURL();
    }


    render() {

        return(
            <div>
                <Featured slides={this.state.home.slider} />
                <Subscribe />
                <Blocks blocks={this.state.home.blocks} />
                <Polls />
            </div>
        )

    }

}


export default Home