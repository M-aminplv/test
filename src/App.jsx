import { useEffect, useState } from "react";
import "./App.css";
import Test from "./Test";

function App() {
	const [data, setData] = useState([]);
  useEffect(() => {
		const myHeaders = new Headers();
		myHeaders.append(
			"x-auth-token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM1YzgwMDA1Y2Q2MzA4NjY5MzEyMzIiLCJlbWFpbCI6ImNAYS5jb20iLCJmaXJzdE5hbWUiOiJiYiIsImxhc3ROYW1lIjoiYWEiLCJjb21wYW55IjoiZmZmZiIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDk0MDAxNDMsImV4cCI6MTcxMTk5MjE0M30.LsvKmCT9BuOk0U7q-IrPkQbxPYkgK4ZTNPnaRjVWpyE"
		);
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			userId: "65d9a16ff4eeb8720f375050",
			startDate: "2024-02-04T11:00:11.075+00:00",
			endDate: "2024-03-04T13:08:05.075+00:00",
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch("https://effiscope.info:5021/api/apps/reportdetails", requestOptions)
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				// Access the response data
        console.log(data)
				setData(data);
        

				// Process the data further as needed
			})
			.catch((error) => {
				// Handle errors
				console.error("Error fetching data:", error);
			});
	},[]);

  
	
	return (
		<h1>
			<Test data={data} />
		</h1>
	);
}

export default App;
