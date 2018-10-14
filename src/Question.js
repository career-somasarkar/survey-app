import React, {Component} from 'react';
import RadioQuestion from './components/RadioQuestion';
import DropDownQuestion from './components/DropDownQuestion';
import OpenTextQuestion from './components/OpenTextQuestion';

class Question extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("")
        this.setState({
            question: this.props.currentQuestion
        });
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
                                selectedId={this.props.currentQuestion.answer.selectedOption.id} />
                        </div>
                        : this.props.currentQuestion.optionType === "DROP_DOWN"
                        ?
                        <div><DropDownQuestion options={this.props.currentQuestion.options}
                        selectedId={this.props.currentQuestion.answer.selectedOption.id}/>
                        </div>
                        : this.props.currentQuestion.optionType === "OPEN_TEXT"
                        ? <div>
                            <OpenTextQuestion selectedValue={this.props.currentQuestion.answer.value}/>
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

export default Question;
