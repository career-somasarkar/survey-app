import React, {Component} from 'react';

class DropDownQuestion extends Component{

    constructor(props){
        super(props);
        this.state = {
            options: this.props.options,
            selected:{
                id: this.props.selectedId,
                value: ""
            }
        }
        this.optionSelected = this.optionSelected.bind(this);
    }

    optionSelected(event){
        if(event){
            this.setState({
                selected:{
                    id:event.target.value
                }   
            });
            this.props.getAnswers(event.target.value);
        }
    }

    render(){
        return(
            <div>
                <select onChange={e=>this.optionSelected(e)} >
                {
                    this.state.options.map((option) => {
                        if(this.state.selected.id === option.id){
                            return(
                                <option key={option.id} value={option.id} selected>
                                    {option.text}
                                </option>
                                )
                        } else {
                            return(
                                <option key={option.id} value={option.id} >
                                    {option.text}
                                </option>
                                )
                        }
                    })
                }
                </select>
            </div>
        )
    }
}

export default DropDownQuestion;