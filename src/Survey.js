import React, {Component} from 'react';
import { SURVEY_DATA } from './resources/data/mockdata';
import Question from './Question';

class Survey extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            index:{
                min: 0,
                max: 0,
                current: -1
            }
        }
        
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount(){
        this.setState(()=>{
            return {
                data: SURVEY_DATA,
                index:{
                    min: 0,
                    max: SURVEY_DATA.length-1,
                    current: 0
                }
            }
        });
    }

    handleNext(){
        
    }

    handleBack(){
        
    }
  

    render(){
        return (
            <div>
                <hr/>
                
                <div>
                    <button onClick={this.handleBack} >Back</button>
                </div>
                <div>
                <button onClick={this.handleNext}>Next</button>
                </div>
            </div>
        );
    }
}

export default Survey;

