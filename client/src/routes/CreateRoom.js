import React from "react";
import { v1 as uuid } from "uuid";

import img from './file.png';

var imageName = require('logo.png');

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div className={"container"}>
            <div className={"header"}>
                <img src={imageName} />
                <h1>The fast, capable and privacy-focused way to call your friends</h1>
            </div>
            <div className={"main2"}>
                <p>Simply press create room to create a room</p>
                <button onClick={create} className={"button2"}>Create Room</button>
            </div>
        </div>
    );
}

export default CreateRoom;