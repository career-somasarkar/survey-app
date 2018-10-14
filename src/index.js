import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SURVEY_DATA} from './resources/data/mockdata'
import Survey from './Survey';

import './style.css';

class Index extends Component{
	constructor(props){
		super(props);	
	}
	
	render()
	{
		return(
			<div>
				Hello Guest, This is a survey. 
				<Survey />
			</div>
		);
	}
};

ReactDOM.render(<Index/>, document.getElementById('root'))