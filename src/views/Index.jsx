import React from "react";
import {Container, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import "../assets/scss/index.scss"
import MainButton from "../components/index/MainButton";

class Index extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            roomCode: "",
            focused: false
        };

        this.handleRoomCodeInput = this.handleRoomCodeInput.bind(this);
        this.onRoomCodeFocus = this.onRoomCodeFocus.bind(this);
        this.onRoomCodeBlur = this.onRoomCodeBlur.bind(this);
    }

    handleRoomCodeInput(event){
        this.setState({roomCode: event.target.value});
    }

    onRoomCodeFocus(){
        this.setState({
            roomCodeFocused: true
        });
    }

    onRoomCodeBlur(){
        this.setState({
            roomCodeFocused: false
        });
    }

    render(){
        return (
            <header className="masthead d-flex">
                <Container className="text-center my-auto">
                    <div className="mx-auto" style={{width: "max-content"}}>
                        <h1 className="mb-3" style={{fontWeight: 600, fontSize: "70px"}}>Project•Klaus</h1>
                        <InputGroup size="lg" className={this.state.roomCodeFocused ? "input-group-focus":""}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="tim-icons icon-app" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input className="mb-2 text-center text-uppercase"
                                   type="text"
                                   placeholder="Room Code"
                                   maxLength={6}
                                   bsSize="lg"
                                   value={this.state.roomCode}
                                   onChange={this.handleRoomCodeInput}
                                   onFocus={this.onRoomCodeFocus}
                                   onBlur={this.onRoomCodeBlur}
                            />
                        </InputGroup>
                        <MainButton roomCode={this.state.roomCode}/>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Index;