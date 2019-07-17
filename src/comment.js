import React from "react";
class List_Comp extends React.Component {
  constructor(props) {
    super(props);
    this.tt = props.h;
    this.y = props.g;
    this.state = {
      j: false
    };
  }

  cclick = e => {
    this.setState({
      j: true
    });
  };
  deletee = () => {
    this.props.fdel(this.y);
  };
  render() {
    return (
      <div className="list-group-item">
        <div onClick={this.cclick}>
          {this.state.j ? <del>{this.tt}</del> : this.tt}
        </div>
        <button className="btn btn-primary btn-block" onClick={this.deletee}>
          Delete
        </button>
      </div>
    );
  }
}

export default List_Comp;
