var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('canvasjs-react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
const backend = require('../backend.json')
class ChartDay extends Component {
 
	render() {	
		const options = {
			theme: "light2",
			title: {
				text: "Daily requests"
			},
			animationEnabled: true,
			zoomEnabled: true,
			axisY: {
				title: "Requests"
			},
			axisX: {
				title: "Daily",
				valueFormatString: "HH:mm'h'",
			},
			data: [{
				type: "area",
				xValueFormatString: "HH:mm:ss",
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
		fetch(`${backend.url}/getDay`)
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
 
export default ChartDay;                