import React from "react";
import List from "./List";
import Form from "./form";
import axios from 'axios';
/*const tasks=["task 1","task 2","task 3","tast 4"];
const pasks = [{ id: 1, title: "pasks 1" }, { id: 2, title: "pask 2" }];*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  add = x => {
    let d=new Date();
    const id = Date.parse(d);
    const record = { id: id, title: x };
    let ifequal=true;
    this.state.items.map((i => {
      if (i.title === x) {
        ifequal = false;
        
      }return ifequal;
    }));
    if (ifequal) {
      this.setState({
        items: [...this.state.items, record]
      });
      
    }
  };
  acdel = l => {
    console.log("my god");
    let r = this.state.items.filter(item => {
      return item.id !== l;
    }); 
    this.setState({
      items: [...r]
    });
  };
  componentDidMount() {
    axios.get('http://localhost:3000/todo')
    .then(a=>{
      const persons = a.data;
        this.setState({items: persons });
    })
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" />

          <Form name="snigdha" add={this.add} />

          <div className="col-sm-4" />
          <br />
          <br />
          <List tasks={this.state.items} acdel={this.acdel} />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
