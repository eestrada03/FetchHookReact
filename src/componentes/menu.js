import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lista: props.array };
  }

  generarlista = () => {
    this.setState({ lista: ["Plátano,Manzana,Fresa"] });
  };

  render() {
    return (
      <div>
        <p>{this.state.lista}</p>
      </div>
    );
  }
}

export default Menu;
