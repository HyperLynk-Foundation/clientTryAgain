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
                <img src="https://lh4.googleusercontent.com/v18lF9r6zxRLfMfUGViavlD5bBa1gztym8W0QFNUKOuiC8YiD1enL0ecfZ-EL7zqQN-hNR9bMJUQhFJ0KtZ3cRakmF9de4h0CzZJJWtP5m0C3asiUHKxBkYbJdDqXbDM5wx9mlx3byUWOGZvbxkCPkVzpK3gPNI07WfKESABwM7513BRBxCiSs_SCs-hkD7_ra6Daf04A0lckvH2ptHGIAcKKvYou9g=w521" alt="Girl in a jacket" width="200"/>
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
