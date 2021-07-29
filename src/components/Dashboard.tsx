import React from "react";
import { FC, useRef, useState } from "react";
import OptionsBar from "./OptionsBar";
import GraphComponent, { generateGraph } from "./Graph";
import { NodeCords } from "../types";
import { useEffect } from "react";

const START_NODE_CORDS: NodeCords = [0, 0];
const FINISH_NODE_CORDS: NodeCords = [6, 6];

const Dashboard: FC = () => {
	const startNodeRef = useRef(START_NODE_CORDS);
	const finishNodeRef = useRef(FINISH_NODE_CORDS);
	const nodeDiameter = useRef(21);
	const [graphHeight, setGraphHeight] = useState(21);
	const [graphWidth, setGraphWidth] = useState(43);
	const [graph, setGraph] = useState(
		generateGraph(startNodeRef.current, finishNodeRef.current, graphHeight, graphWidth)
	);

	useEffect(() => {
		const graphWidthPixels = 900;
		nodeDiameter.current = graphWidthPixels / graphWidth;
	}, [graphWidth]);

	return (
		<div className='dashboard_container'>
			<GraphComponent graph={graph} setGraph={setGraph} nodeDiameter={nodeDiameter} />
			<OptionsBar
				Graph={graph}
				SetGraph={setGraph}
				GRAPH_HEIGHT={graphHeight}
				GRAPH_WIDTH={graphWidth}
				setGraphHeight={setGraphHeight}
				setGraphWidth={setGraphWidth}
			/>
		</div>
	);
};

export default Dashboard;
