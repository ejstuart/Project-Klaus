import React from "react";
import {Container, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import "../assets/scss/index.scss";
import logo from "../assets/images/logo.svg";
import MainButton from "../components/index/MainButton";
import RoomCodeInput from "../components/index/RoomCodeInput";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomCode: "",
        };

        this.handleRoomCodeInput = this.handleRoomCodeInput.bind(this);

    }

    handleRoomCodeInput(event) {
        this.setState({roomCode: event.target.value});
    }

    render() {
        return (
            <header className="masthead d-flex">
                <Container className="text-center my-auto">
                    <div className="mx-auto" style={{width: "max-content"}}>
                        <img src={logo} alt="Project Klaus" style={{maxHeight: "240px"}}/>
                        <h1 className="mb-3" style={{fontWeight: 600, fontSize: "70px"}}>Project•Klaus</h1>

                        <RoomCodeInput onChange={this.handleRoomCodeInput} code={this.state.roomCode}/>
                        <MainButton roomCode={this.state.roomCode}/>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Index;