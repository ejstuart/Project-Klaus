import React from "react";
import {Input, InputGroupAddon, InputGroupText, InputGroup} from 'reactstrap';

export default class RoomCodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};

        this.onRoomCodeFocus = this.onRoomCodeFocus.bind(this);
        this.onRoomCodeBlur = this.onRoomCodeBlur.bind(this);
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
                           maxLength={12}
                           bsSize="lg"
                           onChange={this.props.onChange}
                           onFocus={this.onRoomCodeFocus}
                           onBlur={this.onRoomCodeBlur}
                           value={this.props.code}
                    />
            </InputGroup>
        );
    }
}

