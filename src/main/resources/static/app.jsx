define(function (require) {
	'use strict';

	// tag::vars[]
	var React = require('react');
	var client = require('./client');
	// end::vars[]

	// tag::app[]
	var App = React.createClass({
		getInitialState: function () {
			return ({balloons: []});
		},
		componentDidMount: function () {
			client({method: 'GET', path: '/api/balloons'}).done(response => {
				this.setState({balloons: response.entity._embedded.balloons});
			});
		},
		render: function () {
			return (
				<balloonList balloons={this.state.balloons}/>
			)
		}
	})
	// end::app[]

	// tag::balloon-list[]
	var balloonList = React.createClass({
		render: function () {
			var balloons = this.props.balloons.map(balloon =>
				<balloon key={balloon._links.self.href} balloon={balloon}/>
			);
			return (
				<table>
					<tr>
						<th>Tracking Token</th>
						<th>Start Location</th>
						<th>End Location</th>
					</tr>
					{balloons}
				</table>
			)
		}
	})
	// end::balloon-list[]

	// tag::balloon[]
	var balloon = React.createClass({
		render: function () {
			return (
				<tr>
					<td>{this.props.balloon.trackingToken}</td>
					<td>{this.props.balloon.startLocation}</td>
					<td>{this.props.balloon.endLocation}</td>
				</tr>
			)
		}
	})
	// end::balloon[]

	// tag::render[]
	React.render(
		<App />,
		document.getElementById('react')
	)
	// end::render[]

});