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

    render(){
        return(
            <div>
                <input type="text" value={this.state.selected.value}/>
            </div>
        )
    }


}

export default OpenTextQuestion;