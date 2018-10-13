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
	}
	
	render()
	{
		return(
			<div>
				Hello Guest, This is a survey map. 
				<Survey />
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))