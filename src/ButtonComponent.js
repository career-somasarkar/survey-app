import React from 'react'
import './style.css';

class ButtonComponent extends React.Component{
	constructor(props)
	{
		super(props);
		this.state= {
						compo: 'OptionCompo',
						count:1
					};
	}

	onClickEvent()
	{
		//debugger;
		if(this.props.Id==1)
		{		
			//debugger;
			this.setState({compo: 'RadioCompo', count:2});
			this.props.HandleOnSubmit('RadioCompo');
			console.log("btn line 21: " + this.state.count);
			console.log("btn line 21: " + this.state.compo);
		}		
		if(this.props.Id==2)		
		{
			//debugger;
			this.setState({compo: 'TextboxCompo', count:3});
			this.props.HandleOnSubmit('TextboxCompo');
			console.log("btn line 31: " + this.state.count);
			console.log("btn line 31: " + this.state.compo);
		}
		if(this.props.Id==3)		
		{
			//debugger;
			this.setState({compo: 'SummaryCompo', count:4});
			this.props.HandleOnSubmit('SummaryCompo');
			console.log("btn line 37: " + this.state.count);
			console.log("btn line 37: " + this.state.compo);
		}
		if(this.props.Id=='txtBack2')
		{
			//debugger;
			this.setState({compo: 'OptionCompo', count:1});
			this.props.HandleOnSubmit('OptionCompo');
			console.log("back btn line 47: " + this.state.count);
			console.log("back btn line 47: " + this.state.compo);
		}

		if(this.props.Id=='txtBack3')
		{
			//debugger;
			this.setState({compo: 'RadioCompo', count:2});
			this.props.HandleOnSubmit('RadioCompo');
			console.log("back btn line 55: " + this.state.count);
			console.log("back btn line 55: " + this.state.compo);
		}
		if(this.props.Id=='txtBack4')
		{
			//debugger;
			this.setState({compo: 'TextboxCompo', count:3});
			this.props.HandleOnSubmit('TextboxCompo');
			console.log("back btn line 62: " + this.state.count);
			console.log("back btn line 62: " + this.state.compo);
		}
	}

	render(){
		return(			
			<div>
				<input type="button" id={this.props.Id} value={this.props.Text} 
				onClick={(e) => this.onClickEvent(e)}></input>
			</div>
		);
	};
}

export default ButtonComponent