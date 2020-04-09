import React from 'react';
import Layout from '../../components/layout';
import Breadcrumbs from '../../components/breadcrumbs';

class Analytics extends React.Component {
	render() {
		return (
			<Layout>
				<Breadcrumbs
					name="Analytics"
					parentLink="/"
					parentLinkName="Home"
					currentLinkName="Analytics"
				/>
				<p>Analytics</p>
			</Layout>
		);
	}
}

export default Analytics;
