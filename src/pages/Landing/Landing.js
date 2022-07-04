import React from "react";
import HomeScreen from './Sections/HomeScreen'
import Vision from './Sections/Vision'
import Collection from './Sections/Collection'
import Benefit from './Sections/Benefit'
import Roadmap from './Sections/Roadmap'
import Team from './Sections/Team'

export default function Landing() {
	return (
		<>
			<HomeScreen></HomeScreen>
			<Vision></Vision>
			<Collection></Collection>
			<Benefit></Benefit>
			<Roadmap></Roadmap>
			<Team></Team>
		</>
	);
}

