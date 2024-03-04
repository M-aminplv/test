import { PieChart } from "@mui/x-charts";

const Test = ({ data }) => {
	const data1 = [
		{ id: 0, label: data[0]?.app, value: data[0]?.time },
		{ id: 1, label: data[1]?.app, value: data[1]?.time },
		{ id: 2, label: data[2]?.app, value: data[2]?.time },
		{ id: 3, label: data[3]?.app, value: data[3]?.time },
		{ id: 4, label: data[4]?.app, value: data[4]?.time },
		{ id: 5, label: data[5]?.app, value: data[5]?.time },
		{ id: 6, label: data[6]?.app, value: data[6]?.time },
		{ id: 7, label: data[7]?.app, value: data[7]?.time },
		{ id: 8, label: data[8]?.app, value: data[8]?.time },
	];
	return (
		<PieChart
			series={[
				{
					data1,
					highlightScope: { faded: "global", highlighted: "item" },
					faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
				},
			]}
			height={200}
			width={200}
		/>
	);
};

export default Test;
