import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chat'

function App() {
	return (
		<div className="app">
			<Router>
				{/* Header */}
				<Header />

				<div className="app__body">
					{/* Sidebar */}
					<Sidebar />
					{/* React-Router */}
					<Switch>
						<Route path="/room/:roomId">
							<Chat />
							<h1>Chat</h1>
						</Route>
						<Route path="/">
							<h1>Welcome</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
