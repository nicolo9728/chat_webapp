import React from "react"
import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from "./components/Join"
import Header from "./components/Header"
import Chat from "./components/Chat"
import "./style/App.css"


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: sessionStorage.getItem("username"),
            room: sessionStorage.getItem("room")
        }
    }


    render() {

        
        return (
            <div>
                <Header />
                <Router>
                    <Route path="/" exact component={Join} />
                    <Route path="/Chat" component={Chat} />
                </Router>
            </div>
        )
    }
}

export default App;