import React from 'react'
import './style.css';

class TextBoxComponent extends React.Component{
	getValue(e){
		//debugger;
		this.props.HandleChangeEvent(e.target.value);
		console.log("txt: "+e.target.value);
	}
	render(){
		return(
			<div>
				<div className="column1">
				Question3 Question3 Question3 Question3 Question3? 
				</div>
				<div className="column2">	
					<input type="text" name="txtAnswer" onChange={(e)=>this.getValue(e)}></input>
				</div>
			</div>
		);
	}
}

export default TextBoxComponent