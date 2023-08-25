import React from 'react';
import './Recorder.css';
import { useState } from "react";
import AudioRecorder from "../recording/AudioRecorder";
import VideoRecorder from "../recording/VideoRecorder";



const Recorder=()=>{
    let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};

	return (
		<div>
			<h1>React Media Recorder</h1>
			<div className="button-flex">
				<button className="button" onClick={toggleRecordOption("video")}>Record Video</button>
				<button className="button" onClick={toggleRecordOption("audio")}>Record Audio</button>
			</div>
			<div>
				{recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
			</div>
		</div>
	);
}

export default Recorder;