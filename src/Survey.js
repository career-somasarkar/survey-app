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
        if(this.state && this.state.index){
            var cur = this.state.index.current;
            console.log("[next] cur: " + cur);
            console.log("[next] max: " + this.state.data);
            if(this.state.index.max === cur){
                console.log("reached at end")
                return;
            } 
            this.setState((previousState) => {
                return {
                    data: SURVEY_DATA,
                    index:{
                        current: previousState.index.current + 1,
                        min: 0,
                        max: SURVEY_DATA.length-1
                    }
                }
            });
        }
    }

    handleBack(){
        if(this.state && this.state.index){
            var cur = this.state.index.current;
            console.log("[back] cur: " + cur);
            if(cur === 0){
                console.log("reached at start")
                return;
            } 
            this.setState((previousState) => {
                return {
                    data: SURVEY_DATA,
                    index:{
                        current: previousState.index.current - 1,
                        min: 0,
                        max: SURVEY_DATA.length-1
                    }
                }
            });
        }
    }

    

    render(){
        return (
            <div>
                <hr/>
                {
                    this.state && this.state.index.current !== -1
                    ?
                    <Question currentQuestion={this.state.data[this.state.index.current]}/>
                    : 
                    <div></div>
                }
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

