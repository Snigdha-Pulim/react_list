import React from "react"; 
class From extends React.Component{
    constructor(props){
        super(props);
        this.cake=props.name;
        this.state={input: ""};
        
    }
    handleChange=(even)=>{
        this.setState({input:even.target.value});
    }
    blabla = () =>{
        this.props.add(this.state.input);
        this.setState({input:""});
    }
    render() {
        return (
        <div className="col-sm-4" >
            <h1 className="text-center">{this.cake}</h1>
            <br></br>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.input}/>
            <br></br>
            <div className="text-center">
            <button className="btn btn-secondary" onClick={this.blabla} > lets see</button>
            </div>
        </div>);
    }
}

export default From;

