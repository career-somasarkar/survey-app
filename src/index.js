import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from './ButtonComponent'
import OptionComponent from './OptionComponent'
import RadioComponent from './RadioComponent'
import TextBoxComponent from './TextBoxComponent'
import SummaryComponent from './SummaryComponent'
import {SURVEY_DATA} from './resources/data/mockdata'
import Survey from './Survey';

import './style.css';

class Index extends React.Component{
	constructor(props){
		super(props);		
		this.state= {
						compo: 'OptionCompo',
						count: 1,
						optionCompoData:'',
						radioCompoData:'',
						textCompoData:'',
						survey: SURVEY_DATA,
						index:{
							min:0,
							max: SURVEY_DATA.length,
							current: -1
						}
					};
		this.goToNext = this.goToNext.bind(this);
		this.getOptionCompoData = this.getOptionCompoData.bind(this);
	}
	
	goToNext(nxtCompo)
	{
		//debugger;
		if(nxtCompo == 'OptionCompo'){
			this.setState({count:1, compo : nxtCompo});
			console.log("line 48: " + this.state.count);
			console.log("line 48: " + this.state.compo);
		}
		if(nxtCompo == 'RadioCompo'){
			this.setState({count:2,compo : nxtCompo});
			console.log("line 53: " + this.state.count);
			console.log("line 53: " + this.state.compo);
		}
		if(nxtCompo == 'TextboxCompo'){
			this.setState({count:3,compo : nxtCompo});
			console.log("line 58: " + this.state.count);
			console.log("line 58: " + this.state.compo);
		}	
		if(nxtCompo == 'SummaryCompo'){
			this.setState({count:4,compo : nxtCompo});
			console.log("line 58: " + this.state.count);
			console.log("line 58: " + this.state.compo);
		}	
	}	
	getOptionCompoData(arg)
	{
		this.setState({optionCompoData: arg});
		console.log("ddl index: "+this.state.optionCompoData);
		console.log("ddl index: "+arg);
	}
	getRadioCompoData(arg)
	{
		this.setState({radioCompoData: arg});
		console.log("radio index: "+this.state.radioCompoData);
		console.log("radio index: "+arg);
	}
	getTextCompoData(arg)
	{
		this.setState({textCompoData: arg});
		console.log("txt index: "+this.state.textCompoData);
		console.log("txt index: "+arg);
	}
	render(){
		var componentItem;
		if(this.state.compo == 'OptionCompo'){
			//debugger;
			componentItem = <OptionComponent HandleChangeEvent={this.getOptionCompoData.bind(this)}/>;
		}
		if(this.state.compo == 'RadioCompo'){
			//debugger;
			componentItem = <RadioComponent HandleChangeEvent={this.getRadioCompoData.bind(this)}/>;
		}
		if(this.state.compo == 'TextboxCompo'){
			//debugger;
			componentItem = <TextBoxComponent HandleChangeEvent={this.getTextCompoData.bind(this)}/>;
		}
		if(this.state.compo == 'SummaryCompo'){
			//debugger;
			componentItem = <SummaryComponent Text={this.state}/>;
		}	
		return(
			<div>
				Hello Guest, This is a survey map. 
				{/* {componentItem}
				<div className="row">
					<div className="column1">
						<ButtonComponent Text="Next" Id={this.state.count} HandleOnSubmit={this.goToNext.bind(this)}/>
					</div>
					<div className="column2">
						<ButtonComponent Text="Back" Id={"txtBack"+this.state.count} HandleOnSubmit={this.goToNext.bind(this)}/>
					</div>
				</div> */}
				<Survey />
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))