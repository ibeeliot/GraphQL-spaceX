import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
// this is the string query you write in gql tag and use the react-apollo client in order
// to make the queries you need. Pass the "query" down into the Query component from react-apollo
const LAUNCHES_QUERY = gql`
	{
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

export class Launches extends Component {
	render() {
		return (
			<>
				<h1 className='display-4 my-3'>Launches</h1>
				<Query query={LAUNCHES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);
						return (
							<>
								{data.launches.map(launch => (
									<LaunchItem key={launch.flight_number} launch={launch} />
								))}
							</>
						);
					}}
				</Query>
			</>
		);
	}
}

export default Launches;
