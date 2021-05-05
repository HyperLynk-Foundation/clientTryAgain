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
                <img src="https://lh6.googleusercontent.com/hQfk_x_Ga4Ruj7szlSJQrv-NIu2eScEpXEXc6061LGpTghDT1CIXXWkzQfKN6knvElQNJ_5By_Em26cO8JgIJpoDdaaCGMLCfIydn3DnyCkJu41i3mqTPyh8EutIZPiybbiYSVRjBOax45nLtONOibJhhTO_fkiqAQTspRUP-SEMOHhw2QDLlGpqPVCewy9sVgnirZ2r3sh0gmw5s07efUdNi-2rPes=w1920-h966" alt="Handshake Logo" width="200"/>
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
