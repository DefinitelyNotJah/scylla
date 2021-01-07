var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('canvasjs-react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
 const backend = require('../backend.json')
var dataPoints =[];
class ChartYear extends Component {
 
	render() {	
		const options = {
			theme: "light2",
			title: {
				text: "Yearly Requests"
			},
			axisY: {
				title: "Requests"
			},
			axisX: {
				title: "Year",
				valueFormatString: "MMM YYYY",
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "######",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		fetch(`${backend.url}/getStats`)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: new Date(data[i].x),
					y: data[i].y
				});
			}
			chart.render();
		});
	}
}
 
export default ChartYear;                