import React from "react";

class Producto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.datos.title,
      img: props.datos.thumbnail,
    };
    console.log(props);
  }

  render() {
    return (
      <div className="content">
        <h1>{this.state.title}</h1>
        <img className="fotos" src={this.state.img}></img>
      </div>
    );
  }
}

export default Producto;
