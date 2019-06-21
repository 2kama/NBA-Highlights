import React, { Component } from 'react'

const URL_SUBSCRPTION = 'http://localhost:3001/subcriptions';



class Subscribe extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email : '',
            error : false,
            success : false
        }
    }


    backToDefault = () => {
        setTimeout(() => {
            this.setState({success : false})
        }, 5000)
    }

    saveSubscription = (email) => {
        fetch(URL_SUBSCRPTION,{
            method: "POST",
            headers :{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({email})
        })
        .then(res => res.json())
        .then(() => {
            this.setState({
                email : '',
                error : false,
                success : true
            })
            this.backToDefault()
        })
    }


    changeInput = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    formSubmit = (evt) => {
        evt.preventDefault()

        let email = this.state.email
        let regex = /\S+@\S+\.\S+/

        if(regex.test(email)) {

            this.saveSubscription(email)

        }else {
            this.setState({error : true})
        }
    }


    render() {
        return(
            <div className="subscribeSection">
                <span>Subscribe to get lastest update</span>
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.email} onChange={this.changeInput}/>
                </form>
                <div className={this.state.error ? 'errorShow' : 'errorHide'}>Please input a valid Email</div>
                <div className={this.state.success ? 'errorShow' : 'errorHide'}>Thank you</div>
            </div>
        )
    }




}

export default Subscribe