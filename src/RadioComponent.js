import React from 'react';
import './style.css';

class RadioComponent extends React.Component{
getValue(e){
		//debugger;
		this.props.HandleChangeEvent(e.target.value);
		console.log("radio: "+e.target.value);
	}
	render(){
		return(
			<div className="row">
				<div className="column1">	
					Question2 Question2 Question2 Question2 Question2? 	
				</div>
				<div className="column2">
					<input type="radio" name="AnswerType" value="Answer1" id="rAnswerType" onChange={(e)=>this.getValue(e)}></input>
					<label htmlFor="rAnswerType">Answer1</label>
	  				<input type="radio" name="AnswerType" value="Answer2" id="rAnswerType" onChange={(e)=>this.getValue(e)}></input>
	  				<label htmlFor="rAnswerType">Answer2</label> 
  				</div> 				
			</div>
		);
	};
}

export default RadioComponent