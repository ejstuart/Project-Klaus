import React from "react";
import {Button} from "reactstrap";

class MainButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.roomCode.length === 0){
            return <Button color="primary" block={true} size="lg">Create Room</Button>;
        } else if (this.props.roomCode.length === 12) {
            return <Button color="success" disabled={false} block={true} size="lg">Join Room</Button>;
        } else {
            return <Button color="info" disabled={true} block={true} size="lg">Join Room</Button>;
        }
    }
}

export default MainButton;