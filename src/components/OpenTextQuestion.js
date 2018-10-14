import React, {Component} from 'react';

class OpenTextQuestion extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: this.props.options,
            selected:{
                id: this.props.selectedId,
                value: this.props.selectedValue
            }
        }
        //this.optionSelected = this.optionSelected.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    
    getValue(event)
    {
        this.props.getAnswers(event.target.value);
    }

    render(){
        return(
            <div>
                <input type="text" onChange={(e)=>this.getValue(e)}/>
            </div>
        )
    }


}

export default OpenTextQuestion;