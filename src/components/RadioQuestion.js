import React, {Component} from 'react';

class RadioQuestion extends Component{

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
            })
        }
    }

    getValue(e)
    {
        console.log(e);
        this.props.getAnswers(e.target.value);
    }

    render(){
        return(
            <div>
                <form onChange={this.optionSelected} action="" >
                {
                    this.state.options.map((option) => {
                        if(this.state.selected.id === option.id){
                            return(
                                <div>
                                    <input key={option.id} name="test" value={option.id}
                                        type="radio" onChange={e=>this.getValue(e)} checked/>
                                        <span>{option.text}</span>
                                </div>
                                )
                        } else {
                            return(
                                <div>
                                    <input key={option.id} name="test" value={option.id} 
                                        type="radio" onChange={e=>this.getValue(e)}  />
                                        <span>{option.text}</span>
                                </div>
                                )
                        }
                    })
                }
                </form>
            </div>
        )
    }


}

export default RadioQuestion;