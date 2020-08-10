import React, { Component } from "react"
import "../style/Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: {
                username: props.username,
                room: props.room
            }
        }
    }


    render() {
        const { username, room } = this.state.session
        return (
            <header>
                <h1 className="header-title">chat-react</h1>
                <section className="header-auth">
                    <h1>{username} -- {room}</h1>
                </section>
            </header>
        )
    }

}

export default Header;
