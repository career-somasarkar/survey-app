import React, {Component} from 'react';
import RadioQuestion from './components/RadioQuestion';
import DropDownQuestion from './components/DropDownQuestion';
import OpenTextQuestion from './components/OpenTextQuestion';
import AnswerSummary from './components/AnswerSummary';

class Question extends Component{

    constructor(props){
        super(props);
        this.getRadioAnswer = this.getRadioAnswer.bind(this);
        this.getOptionsAnswer = this.getOptionsAnswer.bind(this);
        this.getTextAnswer = this.getTextAnswer.bind(this);
    }

    componentDidMount(){
        console.log("")
        this.setState({
            question: this.props.currentQuestion
        });
    }
    
    getRadioAnswer(id)
    {        
        let selectedText = getval(id,this.props.currentQuestion.options);
        this.setState({radioAnswer: selectedText});        
    }
    getOptionsAnswer(id)
    {
        let selectedText = getval(id,this.props.currentQuestion.options);
        this.setState({optionAnswer: selectedText});
    }
    getTextAnswer(e)
    {
        console.log("Text is: " +e);
        this.setState({textAnswer: e});
    }
    
    render(){
        console.log("Props: " + this.props.currentQuestion.id)
        return(
            <div>
            {this.props && this.props.currentQuestion 
                ? 
                <div>
                    <div>{this.props.currentQuestion.id}: {this.props.currentQuestion.text}</div>
                    <hr/>
                    {
                        this.props.currentQuestion.optionType === "RADIO"
                        ? 
                        <div>
                            <RadioQuestion options={this.props.currentQuestion.options} 
                                getAnswers = {this.getRadioAnswer.bind(this)}
                                selectedId={this.props.currentQuestion.answer.selectedOption.id} />
                        </div>
                        : this.props.currentQuestion.optionType === "DROP_DOWN"
                        ?
                        <div>
                            <DropDownQuestion options={this.props.currentQuestion.options}
                            getAnswers = {this.getOptionsAnswer.bind(this)}
                        selectedId={this.props.currentQuestion.answer.selectedOption.id}/>
                        </div>
                        : this.props.currentQuestion.optionType === "OPEN_TEXT"
                        ? <div>
                            <OpenTextQuestion getAnswers={this.getTextAnswer.bind(this)}
                            selectedValue={this.props.currentQuestion.answer.value}/>
                        </div>
                        : this.props.currentQuestion.optionType === "SUMMARY"
                        ?<div><AnswerSummary text={this.state}/>
                        </div>
                        : <div>unknown
                        </div>
                    }
                </div>
                :
                <div></div>
            }
            </div>
        );
    }
}
function getval(id, currentOptions)
{
    let v = currentOptions;
    let selectedText = '';

    for(let item = 1; item<=v.length; item++)
    {            
        if(item == id)
        {
            console.log("text is: " +v[item-1]);
            selectedText=v[item-1].text;
        }
    }
    console.log("radio is: " +selectedText);
    return selectedText;
}


export default Question;
