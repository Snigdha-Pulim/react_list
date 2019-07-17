import React from "react"; 
import List_Comp from "./List_Comp";

class List extends React.Component{
    constructor(props){
        super(props);
    }
    fdel = w =>{
        this.props.acdel(w);
    }
    render() {
        return (
            <div className="col-sm-12">
                <br></br>
                <ol className="list-group">
                {this.props.tasks.map(i=>{
                        return (
                            <li><List_Comp g={i.id} h={i.title} fdel={this.fdel}  ></List_Comp></li>
                            );
                })}
            </ol>
            </div>);
    }
}

export default List;