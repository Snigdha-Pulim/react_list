import React from "react"; 
class Add_Comment extends React.Component{
    constructor(props){
        super(props);
        /*this.cake=props.name;
        this.state={input: ""};*/
        
    }
    /*handleChange=(even)=>{
        this.setState({input:even.target.value});
    }
    blabla = () =>{
        this.props.add(this.state.input);
        this.setState({input:""});
    }*/
    render() {
        return (<input placeholder="comment here"/>);
    }
}

export default Add_Comment;
