import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div className={"container"}>
            <div className={"header"}>
                <img src="https://i.ibb.co/nr3vGdN/handshakelogo.png" alt="Handshake Logo" width="200"/>
                <h2>Fast, Capable, Private</h2>
            </div>
            <div className={"main2"}>
                <p>Press create room to get started</p>
                <button onClick={create} className={"button2"}>+ Create Room</button>
            </div>
        </div>
    );
}

export default CreateRoom;
