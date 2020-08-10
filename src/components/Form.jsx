import React, { Component } from "react"
import "../style/Form.css"

const TextBox = (props)=><input type="text" className="textbox" placeholder={props.description} onChange={props.onChange} name={props.name}/>

const NumericUpDown = (props)=><input type="number" defaultValue="1" min="1" className="numericUpDown" placeholder={props.description} onChange={props.onChange} name={props.name}/>

const Button = (props)=><input type="button" className="button" value={props.text} onClick={props.onClick}/>

class Form extends Component{
    constructor(props){
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: "",
            room: 1
        }
    }

    onChangeValue(e){
        
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        const {username, room} = this.state

        if(username !==  "" && room>0)
        {
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("room", room)
            window.location.href = "/chat"
        }
        else
            this.refs.error.innerHTML = "dati non validi"
    }

    render(){
        return(
            <form className="form-signin">
                <h1 className="form-title">accedi alla chat</h1>
                <p className="form-error" ref="error"></p>
                <TextBox  onChange={this.onChangeValue} name="username" description="username"/>
                <NumericUpDown name="room" description="room" onChange={this.onChangeValue}/>
                <Button text="entra" onClick={this.onSubmit} />
            </form>
        )
    }
}


export default Form