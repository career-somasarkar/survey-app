import React, {Component} from 'react';
import '../style.css';

class AnswerSummary extends Component{
	render(){
			return(
			<div> 
				<div><span>Summary:</span></div>
				<div>					
					<hr/>					
					{this.props.text.radioAnswer}
					<hr/>
					{this.props.text.textAnswer}
					<hr/>
					{this.props.text.optionAnswer}
				</div>
			</div>
		);
	};
}

export default AnswerSummary