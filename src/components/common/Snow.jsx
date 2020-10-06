import React from "react";

class Snow extends React.Component {
    render(){
        const flakes = [...Array(this.props.number)].map((v, i)=><div className="snow" key={i}/>);
        return (
            <div>
            {flakes}
            </div>
        );
    }
}

export default Snow;