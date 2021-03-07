import React, { useRef, useEffect } from "react";
import io from "socket.io-client";

const Room = (props) => {
    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();

    useEffect( () => {
        navigator.mediaDevices.getUserMedia({audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;
        });
    }, []);

    return (
        <div>
            <video autoPlay ref={userVideo} />
            <video autoPlay ref={partnerVideo} />
        </div>
    );
};

export default Room;