import React,{Fragment} from 'react';
import Plot from 'react-plotly.js';
import Loading from './LoadingComponent';


class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false,
		}
	}
    render() {
		console.log(this.props);
		
		{
        return(
            

        <Plot
            data={[
                {
                    x: this.props.x_axis,
            y: this.props.y_axis,
            
            
                        type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
                }
            ]}
            
            layout={{
                autosize: true,
                // margin:dict(t=0,b=0,l=0,r=0),
				margin: {
					l: 30,
					r: 0,
					b: 30,
					t: 15,
					pad: 4
					},
                
                paper_bgcolor:'#121212',
    		plot_bgcolor:'#121212',
                    color:'#121212',
                    width: 530,
                    height: 400,
                    boxShadow:10,
                    
                    title: this.props,}}
                    />


        );

    

    
    
    };

    }
}      


export default Chart;
