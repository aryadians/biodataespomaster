import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import pujasari from '../assets/project/pujasari.png';
import nuwszy from '../assets/project/nuwszy.png';
import cochat from '../assets/project/cochat.png';

class Projects extends Component {
	state = {
		projectList: [
			{
				name: 'CoChat',
				image: cochat,
			},
			{
				name: 'Nuwszy',
				image: nuwszy,
			},
			{
				name: 'Pujasari (E-Commerce Dashboard)',
				image: pujasari,
			},
		],
	};

	render() {
		return (
			<View style={{ marginTop: 38 }}>
				{this.state.projectList.map(project => (
					<View
						key={project.name}
						style={{ borderRadius: 6, overflow: 'hidden', backgroundColor: 'white', borderWidth: 1, borderColor: '#00000010', marginBottom: 20 }}
					>
						<Image source={project.image} style={{ width: '100%', height: 200 }} />
						<View style={{ bottom: 0, padding: 10, width: '100%' }}>
							<Text style={{ fontFamily: 'Roboto-Medium' }}>{project.name}</Text>
						</View>
					</View>
				))}
			</View>
		);
	}
}

export default Projects;
