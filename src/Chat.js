import React from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';

function Chat() {
	const { roomId } = useParams();
	return (
		<div className="chat">
			<h1>You are in the {roomId} </h1>
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
                        <strong># general</strong>
                    </h4>
				</div>
				<div className="chat__headerRight" />
			</div>
		</div>
	);
}

export default Chat;
