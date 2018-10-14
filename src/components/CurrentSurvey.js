import React, {Component} from 'react';
import { SURVEY_DATA } from '../resources/data/mockdata';

class CurrentSurvay extends Component {

    constructor(){
        super();

        this.state = {
            data: SURVEY_DATA
        }

        this.updateSelectedAnswer = this.updateSelectedAnswer.bind(this);
    }

    updateSelectedAnswer(questionNumber, selection){
        console.log(questionNumber);
        console.log(selection);
        if(this.state && 
            selection && 
            questionNumber >=0 && questionNumber <= this.state.index.max){
                if(selection.optionType != "OPEN_TEXT"){
                    this.state.data[questionNumber].answer.selectedOption = selection.id;
                } else {
                    this.state.data[questionNumber].answer.value = selection.value;
                }
            
        }
    }


}

export default CurrentSurvay;
