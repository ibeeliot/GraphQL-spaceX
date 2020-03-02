import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/launches';

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<div className='image-container'>
					<img
						id={`logo-image`}
						src='https://i.postimg.cc/3xyTvxpm/spacex-logo-261-268-hd-wallpapers.jpg'
					/>
					<Launches />
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
