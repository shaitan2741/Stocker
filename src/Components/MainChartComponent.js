import React,{Fragment} from 'react';
import Plot from 'react-plotly.js';
import { withWindowSizeListener } from 'react-window-size-listener';
import Loading from './LoadingComponent';
import '../App.css';


class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            loading:false,
            width:600,
            height:400,
		}
    }
    
    updateDimensions() {
        if(window.innerWidth < 700 && window.innerHeight >550) {
        this.setState({ width: 550, height: 400 });
        console.log('this is being called less than 700');
        }
        if(window.innerWidth < 550) {
            this.setState({ width: 450, height: 380 });
            console.log('this is being called less than 550');
            }
        else {
        // let update_width  = window.innerWidth/3;
        // let update_height = Math.round(update_width/1.5);
        // console.log("after resize width",update_width);
        // console.log("after resize height",update_height);
        // this.setState({ width: update_width, height: update_height });
        }
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
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
                    width:this.state.width,
                    height:this.state.height,
                    position:'inherit',
                    
                    title: this.props,}}

                    
                    />


        );

        

    
    
    };


    }
    
}      


export default Chart;
