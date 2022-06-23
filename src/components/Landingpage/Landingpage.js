import React from "react";
import HomeScreen from '../HomeScreen/HomeScreen'
import Vision from '../Vision/Vision'
import Collection from '../Collection/Collection'
import Benifit from '../Benifit/Benifit'
import Roadmap from '../Roadmap/Roadmap'
import Team from '../Team/Team'

export default function Landingpage() {
    return (
        <>
            <HomeScreen></HomeScreen>
            <Vision></Vision>
            <Collection></Collection>
            <Benifit></Benifit>
            <Roadmap></Roadmap>
            <Team></Team>
        </>
    );
}

