import React from 'react';
import './style.css';

class SummaryComponent extends React.Component{
	render(){
			return(
			<div> 
				<div><span>Summary:</span></div>
				<div className="column1">
					Question1: {this.props.Text.optionCompoData}
					Q2: {this.props.Text.radioCompoData}
					Q3:{this.props.Text.textCompoData}
				</div>
			</div>
		);
	};
}

export default SummaryComponent