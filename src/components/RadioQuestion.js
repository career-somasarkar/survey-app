import React, {Component} from 'react';

class RadioQuestion extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <span>{option.text}</span>
            </div>
        )
    }
}

export default RadioQuestion;