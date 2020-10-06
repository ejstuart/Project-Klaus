import React from "react";
import {Input, InputGroupAddon, InputGroupText, InputGroup} from 'reactstrap';

export default class RoomCodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};

        this.onRoomCodeFocus = this.onRoomCodeFocus.bind(this);
        this.onRoomCodeBlur = this.onRoomCodeBlur.bind(this);
        this.onRoomCodeChange = this.onRoomCodeChange.bind(this);
    }

    formatRoomCode(code){
        if (code.length > 4){
            return code.substr(0, 4) + "-" + code.substr(4, 4);
        }
        return code;
    }

    recoverRoomCode(code){
        return code.split("-").join("");
    }

    onRoomCodeChange(event){
        event.target.value = this.recoverRoomCode(event.target.value);
        if (event.target.validity.valid) {
            this.props.onChange(event);
        }
    }

    onRoomCodeFocus() {
        this.setState({
            focused: true
        });
    }

    onRoomCodeBlur() {
        this.setState({
            focused: false
        });
    }

    render() {
        return (
            <InputGroup size="lg" className={this.state.focused ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="tim-icons icon-app"/>
                    </InputGroupText>
                </InputGroupAddon>
                    <Input className="mb-2 text-center text-uppercase"
                           type="text"
                           placeholder="Room Code"
                           maxLength={9}
                           pattern={"[0-9A-Za-z]*"}
                           bsSize="lg"
                           onChange={this.onRoomCodeChange}
                           onFocus={this.onRoomCodeFocus}
                           onBlur={this.onRoomCodeBlur}
                           value={this.formatRoomCode(this.props.code)}
                    />
            </InputGroup>
        );
    }
}

