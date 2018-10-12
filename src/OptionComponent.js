import React from 'react';
import './style.css';

class OptionComponent extends React.Component{
	componentWillMount()
	{
		this.setState(
			{
				AnswerOptions:[
					{answer:'ans1', id: '1'},
					{answer:'ans2', id: '2'},
					{answer:'ans3', id: '3'}
				]
			}
		);
	}
	getValue(e){
		//debugger;
		this.props.HandleChangeEvent(e.target.value);
		console.log("ddl: "+e.target.value);
	}
	render(){
		var items=this.state.AnswerOptions.map(item=>{return<option key={item.id} value={item.answer}>{item.answer}</option>});
		return(
			<div  className="row"> 
				<div className="column1"><span>Question1 Question1 Question1 Question1? </span></div>
				<div className="column2"><select onChange={(e)=>this.getValue(e)}>{items}</select></div>
			</div>
		);
	};
}

export default OptionComponent